import {mount, shallowMount} from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall";

describe('ParentWithAPICallChild.vue',  ()=> {
    it('랜더링이 시작되면 최초의 api요청이 진행된다.',()=>{
        const wrapper = mount(ParentWithAPICallChild,{
            stubs:{
                ComponentWithAsyncCall:true
            }
        });
        expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
    })

    it("shallowMount로 랜더링이되면 최초의 api가 요청되지 않는다.",()=>{
        const wrapper = shallowMount(ParentWithAPICallChild);
        expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
    })
});
