<template>
  <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'eProdModal' + product.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel2"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-2">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Edit Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editproduct" id="modal-form" class="p-2">
            <input
              type="text"
              id="title-add"
              placeholder="Product Name"
              v-model="product.title"
            />
            <input
              type="text"
              id="address-add"
              placeholder="Product Category"
              v-model="product.category"
            />
            <input
              type="url"
              placeholder="Image URL"
              id="imageURL-add"
              v-model="product.imgURL"
            />
            <div>
              <input
                type="number"
                id="price-add"
                placeholder="Price"
                v-model="product.price"
              />
            </div>

            <input
              v-model="product.quantity"
              class="form form-sm"
              placeholder="Quantity"
              aria-label=".form-sm example"
              id="quantity-add"
            />
            <textarea
              name="description"
              id="description"
              cols="52"
              rows="10"
              placeholder="Description of your product"
              v-model="product.description"
            ></textarea>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="btn"
              class="btn btn-outline-dark"
              data-bs-dismiss="modal"
              @click="edit"
            >
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    edit() {
      return this.$store.dispatch("editproduct", this.product);
    },
  },
};
</script>
