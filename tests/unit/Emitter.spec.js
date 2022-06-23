import {mount} from "@vue/test-utils";
import Emitter from "@/components/Emitter.vue";

describe('Emitter', () => {
    it("Emits는 인자 2가지를 가진다.", () => {
        const wrapper = mount(Emitter);
        wrapper.vm.emitEvent();
        wrapper.vm.emitEvent();

        console.log(wrapper.emitted().myEvent);
    });

    it("마운팅된 컴포넌트없이 이벤트 방출하기",()=>{
        // since $emit is just a javascript object
        const events = {};
        const $emit = (event , ...args) => { events[event] = [...args]};

        // by using call, you call call a method without mounting the component
        Emitter.methods.emitEvent.call({$emit});
        expect(events.myEvent).toEqual(["name", "password"]);

        // call을 통해서 사용하면 component의 라이프싸이클과 상관없이
        // this맥락의 함수들을 사용할 수 있음
    })



});
