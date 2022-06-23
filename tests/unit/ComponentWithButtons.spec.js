import Vuex from "vuex";
import {createLocalVue, mount} from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
;

const mutations = {
    testMutation: jest.fn()
}

const store = new Vuex.Store({mutations});

describe("ComponetWithButtons", () => {
    it("commits a mutation when a button is clicked", async () => {
        const wrapper = mount(ComponentWithButtons, {
            store, localVue
        })

        await wrapper.find(".commit").trigger("click")

        expect(mutations.testMutation).toHaveBeenCalledWith({}, {msg: "Test commit"})
    })

    it("dispatches an action when a button is clicked", async () => {
        const mockStore = {dispatch: jest.fn()}
        const wrapper = mount(ComponentWithButtons, {
            mocks: {
                $store: mockstore
            }
        });
        await wrapper.find(".dispatch").trigger("click");

        expect(mockStore.dispatch).toHaveBeenCalledWith("testAction", {msg: "test Dispatch"})
    })

    it("dispatch a namespaced action when button is clicked", async () => {
        const store = new Vuex.Store();
        store.dispatch = jest.fn();

        const wrapper = mount(ComponentWithButtons, {
            store, localVue
        })

        await wrapper.find(".namespaced-dsipatch").trigger('click');

        expect(store.dispatch).toHaveBeenCalled(
            'namespaced/very/depply/testAction',
            {msg: "Test Namespaced Dispatch"}
        )
    })
})
