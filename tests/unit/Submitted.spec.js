import {mount} from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";

let url = ''
let data = ''

const mockHttp = {
    get: (_url, _data) => {
        return new Promise((resolve, reject) => {
            url = _url
            data = _data
            resolve()
        })
    }
}


describe('FormSubmitter', () => {
    it("전송될때 확인하기", async () => {
        const wrapper = mount(FormSubmitter,{
            mocks:{
                $http:mockHttp
            }
        });

        await wrapper.find("[data-username]").setValue("alice");
        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper
            .find(".message")
            .text())
            .toBe("Thank you for your submission, alice");

    })
});
