import Swal from "sweetalert2";

export function swallError(text) {
    Swal.fire({
        icon: "error",
        title: "Ops...",
        text: text,
        showCloseButton: false,
      });
}