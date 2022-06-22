import {mount} from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer.vue";

const createWrapFactory = (even) => mount(NumberRenderer, {
    propsData: {
        ...even
    }
})

describe('NumberRenderer', function () {
    it("짝수가 랜더링됨", () => {
        const wrapper = createWrapFactory({even:false});
        expect(wrapper.text()).toBe("2, 4, 6, 8");
    });
    it("홀수가 랜더링됨", () => {
        const wrapper = createWrapFactory({even:true});
        expect(wrapper.text()).toBe("1, 3, 5, 7");
    })
});
