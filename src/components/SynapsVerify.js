import { onMounted, onUnmounted, h, computed, defineComponent } from "vue-demi";
const serviceUrl = {
  individual: "https://verify.synaps.io",
  corporate: "https://verify-v3.synaps.io",
};
export default defineComponent({
  name: "SynapsVerify",
  props: {
    sessionId: {
      type: String,
    },
    service: {
      type: String,
    },
    onReady: {
      type: Function,
    },
    onFinish: {
      type: Function,
    },
    color: {
      type: Object,
    },
    lang: {
      type: String,
    },
    tier: {
      type: Number,
    },
  },
  setup({ sessionId, service, color, lang, tier }, { emit }) {
    const listernerMessage = ({ data }) => {
      if (data.type === "ready") {
        emit(data.type);
      } else if (data.type === "finish") {
        emit(data.type);
      }
    };

    onMounted(() => {
      window.addEventListener("message", listernerMessage);
    });
    onUnmounted(() => {
      window.removeEventListener("message", listernerMessage);
    });
    const url = computed(() => {
      const params = {
        service,
        session_id: sessionId,
        primary_color: color ? color.primary : undefined,
        secondary: color ? color.secondary : undefined,
        lang: lang ? lang : "en",
        tier: tier ? tier : undefined,
      };
      return `${serviceUrl[service]}?${Object.keys(params)
        .reduce((acc, key) => {
          if (params[key]) {
            acc.push(`${key}=${params[key]}`);
          }
          return acc;
        }, [])
        .join("&")}`;
    });
    return () =>
      h("iframe", {
        src: url.value,
        style: {
          "min-width": "400px",
          "min-height": "687px",
        },
        allow: "microphone; camera; midi; encrypted-media; usb; ethereum",
        allowfullscreen: "true",
        frameBorder: "none",
      });
  },
});
