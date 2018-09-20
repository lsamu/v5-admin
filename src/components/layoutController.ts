import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Home extends Vue {

    public mounted() {
        layui.use('element', function () {
            var element = layui.element;
        });
    }
}