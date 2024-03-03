import { ComponentInternalInstance, computed, getCurrentInstance} from "vue";
import { Router } from "vue-router";

export interface Instance {
  $layout: any;
  $router: Router | undefined;
  $t: any;
}

export const useInstance = (): Instance => {
  const instance: ComponentInternalInstance | null = getCurrentInstance();

  if (!instance) {
    return {} as Instance;
  }

  const $layout: any = computed(() => instance?.proxy?.$route?.meta?.layout);
  const $router: Router | undefined = instance?.proxy?.$router;
  const $t: any = instance?.proxy?.["$t"];

  return {
    $layout,
    $router,
    $t
  };
};
