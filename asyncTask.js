class Light {
    constructor(lights) {
        this.lights = lights;
    }

    async lightOn() {
        async function wait(lights) {
            return new Promise(resolve => setTimeout(
                () => {
                    console.log(`${lights.color} light ${lights.duration} ms`);
                    resolve()
                }, lights.duration)
            );
        }

        await wait(this.lights[0]);
        await wait(this.lights[1]);
        await wait(this.lights[2]);
        await wait(this.lights[3]);
        await wait(this.lights[0]);
        await wait(this.lights[1]);
    }

    start() {
        this.lightOn().then();
    }

    stop() {
    }
}

function all(asyncFunctions, final) {
}

module.exports = {Light, all};
