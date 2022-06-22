import {mount} from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe('Greeting.vue', () => {
    it("Greeting이 정상적으로 랜더링 되는가", () => {
        const wrapper = mount(Greeting);
        expect(wrapper.html().includes("Vue and TDD")).toBe(true);
    })
});
