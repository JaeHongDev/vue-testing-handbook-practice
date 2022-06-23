import mutations from "@/store/mutations";

describe("SET_POST", () => {
    it("post state에 새로운 post추가", () => {
        const post = {id: 1, title: "POST"};
        const state = {
            postIds: [],
            posts: {},
        }

        mutations.SET_POST(state, {post})

        expect(state).toEqual({
            postIds: [1],
            posts: {"1": post}
        })
    })
})
