// The getters we will test are:
/*
* poddles: get all poodles
* poddlesByage: gets all poodles, and accepts an age argument
* */

export default {
    poodles: (state) => {
        return state.dogs.filter(dog => dog.breed === "poodle")
    },

    poodlesByAge: (state, getters) => (age) => {
        return getters.poodles.filter(dog => dog.age === age)
    }
}

