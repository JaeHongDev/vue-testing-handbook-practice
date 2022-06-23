import {mount} from "@vue/test-utils";
import '@testing-library/jest-dom';
import Parent from "@/components/Parent.vue";

describe('Parent.vue', () => {
    it("does not render a span", () => {
        const wrapper = mount(Parent);

        expect(wrapper.find("span").element).not.toBeVisible();
    });

    it("does render a span", () => {
        const wrapper = mount(Parent, {
            data() {
                return {showSpan: true}
            }
        })
    })
});
