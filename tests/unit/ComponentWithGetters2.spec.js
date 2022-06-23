import Vuex from "vuex";
import {createLocalVue, mount} from "@vue/test-utils";
import ComponentWithGetters2 from "@/components/ComponentWithGetters2.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    state: {
        firstName: "Alice",
        lastname: "Doe"
    },

    getters: {
        fullname: (state) => state.firstName + " " + state.lastname
    }
})

describe("ComponentWithGetters2", () => {
    it("실제 Vuex getter의 username을 사용하면서 랜덜링이 진행됩니다.", () => {
        const wrapper = mount((ComponentWithGetters2), {store, localVue});
        expect(wrapper.find('.fullname').text()).toBe("Alice Doe");
    })
    it("computed mountion options으로 사용자명을 랜더링",()=>{
        const wrapper = mount(ComponentWithGetters2,{
            computed:{
                fullname:()=>"Alice Doe"
            }
        })
        expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
    })
})
