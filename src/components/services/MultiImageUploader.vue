<template>
    <div class="multi-image-uploader">
        <h3 v-html="title||'Pictures'"></h3>
        <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="dataImages"
            :id-upload="id || 'myIdUpload'"
            :edit-upload="editId || 'myIdEdit'"
            :primary-text="options.primaryText || 'Default'"
            :show-primary="options.showPrimary"
            :mark-is-primary-text="options.markIsPrimaryText || 'Set as default'"
            :drag-text="options.dragText || 'Drag images (many)'"
            :browse-text="options.browseText || '(or) Select'"
            :drop-text="options.dropText || 'Drop your file here ...'"
            :popup-text="options.popupText || 'This image will be displayed as default'"
            :multiple="options.multiple"
            :max-image="options.maxImage || 10"
        ></vue-upload-multiple-image>
    </div>
</template>
<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
    name: "MultiImageUploader",
    components: {
        VueUploadMultipleImage,
    },
    props: {
        title: String,
        id: String,
        editId: String,
        url: String,
        deleteUrl: String,
        options: Object,
        dataImages: Array,
    },
    methods: {
        uploadImageSuccess(formData, index, fileList) {
            // console.log("data", formData, index, fileList);
            // Upload image api
            this.$http
                .post(this.url, formData)
                .then((response) => {
                    fileList[index].name = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    this.deleteImgIfError(index);
                });
        },
        beforeRemove(index, done, fileList) {
            console.log("index", index, fileList);
            console.log(fileList[index].name);
            var r = confirm("remove image");
            if (r == true) {
                done();
            }
        },
        editImage(formData, index, fileList) {
            console.log("edit data", formData, index, fileList);
        },
        deleteImgIfError(index) {
            this.$children[0].images.splice(index, 1);
        },
    },
};
</script>