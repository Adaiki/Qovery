export default class Keypoints {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-key-points ul li');


        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}