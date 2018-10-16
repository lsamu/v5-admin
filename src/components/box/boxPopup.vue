<template>
    <div v-if="visible" style="position: fixed; top: 0;right: 0;bottom: 0;left: 0;z-index: 1000">
        <div class="layui-layer" style="width: 300px; position: relative; margin: 15vh auto auto">
            <div class="layui-layer-title">
                {{title}}
            </div>
            <div class="layui-layer-content">
                <slot></slot>
            </div>
            <span class="layui-layer-setwin">
                <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a>
            </span>
            <div v-if="buttons.length" class="layui-layer-btn">
                <a v-for="item in buttons" :key="item.id">
                    {{item.title}}
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
/**
 * 弹窗
 */
import Vue from "vue";
export default class sdfsd extends Vue {
  visible = false;
  title = "弹窗";
  buttons: any[] = [];
}
</script>
