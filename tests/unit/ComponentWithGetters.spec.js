import Vuex from "vuex";
import {mount,createLocalVue} from "@vue/test-utils";
import ComponentWithGetters from "@/components/ComponentWithGetters.vue";
import componentWithGetters from "@/components/ComponentWithGetters";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    state:{
        username:"alice"
    }
})

describe("ComponentWithVuex",()=> {
    it("실제 vuex 스토어의 username 사용하면서 랜더링됨", () => {
        const wrapper = mount(ComponentWithGetters, {
            store,
            localVue
        })
        expect(wrapper.find(".username").text()).toBe("alice")
    })

    it("가짜 vuex스토어의 username을 사용하면서 랜더링됨",()=>{
        const wrapper = mount(componentWithGetters,{
            mocks:{
                $store:{
                    state:{username: "alice"}
                }
            }
        })
        expect(wrapper.find(".username").text()).toBe("alice");

    })
})
