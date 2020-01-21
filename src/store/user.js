import { observable } from '~/noobx/index';

export default {
    user: observable({
        name: ''
    }),
    setName(name) {
        this.user.name = name;
    },
    isValid() {
        return this.user.name !== '';
    }
}