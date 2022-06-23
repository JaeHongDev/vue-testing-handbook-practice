import {mount} from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe('Bilingual.vue', ()=> {
    it("성공적으로 랜더링이 되는가? ",()=>{
        const wrapper = mount(Bilingual, {
            mocks:{
                $t:(msg)=>msg
            }
        });
    })
});
