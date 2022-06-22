import SubimtButton from "@/components/SubimtButton.vue";
import {mount} from "@vue/test-utils";
const msg = "submit";
const factory = (propsData)=>{
    return mount(SubimtButton,{
        propsData:{
            msg,
            ...propsData
        }
    })
}

describe('SubmitButton.vue', () => {
    it("displays a non authorized message", () => {
        const wrapper = factory();
        console.log(wrapper.html);

        expect(wrapper.find("span").text()).toBe("Not Authorized");
        expect(wrapper.find("button").text()).toBe("submit");
    });
    it("displays a admin privileages message",()=>{
        const msg = "submit";
        const isAdmin = true;
        const wrapper = factory({isAdmin:true});

        console.log(wrapper.html());
        expect(wrapper.find("span").text()).toBe("Admin Privileges");
        expect(wrapper.find("button").text()).toBe("submit");
    })
});
