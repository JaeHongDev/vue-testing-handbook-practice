import actions from "@/store/actoins"


let url = "";
let body = {}
let mockError = false;
jest.mock("axios",()=>({
    post:(_url,_body)=>{
        return new Promise((resolve)=>{
            if(mockError) throw Error();

            url=_url;
            body=_body;
            resolve(true);
        })
    }
}))

describe('authenticate', () => {
    it("사용자 인증", async () => {
        const commit = jest.fn();
        const username = "alice";
        const password = "password";

        await actions.authenticate({commit}, {username, password})

        expect(url).toBe("/api/authenticate");
        expect(body).toEqual({username,password});
        expect(commit).toHaveBeenCalled("SET_AUTHENTICATED",true);
    })

    it("오류 잡기", async()=>{
        mockError = true

        await expect(actions.authenticate({commit: jest.fn()},{}))
            .rejects.toThrow("API Error occurred");

    })
});
