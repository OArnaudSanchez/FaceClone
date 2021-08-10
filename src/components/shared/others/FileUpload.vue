<template>
  <div class="form-group" :class="generatedFormClass">
    <label v-if="label">{{ label }}</label>
    <!-- <file-pond
      name="uniqueId"
      ref="uniqueId"
      maxFileSize="5MB"
      imagePreviewMaxFileSize="1MB"
      :imagePreviewHeight="imagePreviewHeight"
      :accepted-file-types="acceptedFileTypes"
      :allowMultiple="allowMultiple"
      :allowImageTransform="false"
      @addfile="updateAddedFiles"
      @removefile="updateRemovedFiles"
      @error="onError"
    /> -->
    <small
      class="form-text"
      :class="generatedHelperClass"
      v-for="(help, index) in helpText"
      :key="index"
    >
      <template v-if="help.show">
        {{ help.msg }}
      </template>
    </small>
  </div>
</template>

<script>
// import vueFilePond from "vue-filepond";
// import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
// import FilePondPluginImageResize from 'filepond-plugin-image-resize';
// import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
// import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// const FilePond = vueFilePond(
//   FilePondPluginFileValidateType,
//   FilePondPluginImagePreview,
//   FilePondPluginFileEncode,
//   FilePondPluginImageExifOrientation,
//   FilePondPluginImageCrop,
//   FilePondPluginImageResize,
//   FilePondPluginImageTransform,
//   FilePondPluginFileValidateSize
// );

//!Eliminar estos comentarios

export default {
  name: "FileUpload",
  components: {
    // 'file-pond': FilePond
  },
  props: {
    value: [Array, String],
    label: String,
    helpText: [Array],
    imagePreviewHeight: {
      type: String,
      default: "60"
    },
    allowMultiple: {
      type: Boolean,
      default: true
    },
    acceptedFileTypes: {
      type: Array,
      default: () => ["image/png", "image/jpeg", "image/jpg", "application/pdf"]
    },
    valid: {
      type: Boolean,
      default: null
    },
    onlyBase64: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uniqueId: ""
    };
  },
  created() {
    this.uniqueId = 1
  },
  computed: {
    generatedHelperClass() {
      let valid = "text--muted";
      if (this.valid !== null) {
        valid = this.valid ? "" : "invalid-feedback";
      }
      return `${valid} d-block`;
    },
    generatedFormClass() {
      let valid = "";
      if (this.valid !== null) {
        valid = this.valid ? "" : "is-invalid";
      }
      return `${valid}`;
    }
  },
  methods: {
    getFiles() {
      let parent = this.$refs[this.uniqueId];
      if (parent) {
        let inputs = document.getElementsByName(this.uniqueId);
        let arrayInputs = inputs ? Array.from(inputs) : [];
          let returnMap = arrayInputs.map((input) => {
            if(input.value && input.value !== undefined && input.value !== ''){
              const result = JSON.parse(input.value);
              return this.onlyBase64 ? `data:${result.type};base64,${result.data}` : result;
            }
          });
          return returnMap[0] !== undefined ? returnMap : [];
      }
      return [];
    },
    updateAddedFiles(error) {
      if (!error) {
        setTimeout(() => {
          this.$emit("input", this.getFiles());
        }, 500);
      }
    },
    updateRemovedFiles() {
      setTimeout(() => {
        this.$emit("input", this.getFiles());
      }, 500);
    },
    onError() {
      this.$emit("error", "Hubo un error al cargar el archivo");
    }
  }
};
</script>

<style>
.is-invalid .filepond--drip {
  background-color: #ff3547;
}
</style>
