<template>
  <div class="card mb-2">
    <div class="card-header bg-light">
      <i class="fa fa-comment fa"></i> REPLY
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="form-inline mb-2">
            <label for="replyId"
              ><i class="fa fa-user-circle-o fa-2x"></i
            ></label>
            <input
              type="text"
              class="form-control ml-2"
              placeholder="Enter yourId"
              id="replyId"
            />
            <label for="replyPassword" class="ml-4"
              ><i class="fa fa-unlock-alt fa-2x"></i
            ></label>
            <input
              type="password"
              class="form-control ml-2"
              placeholder="Enter password"
              id="replyPassword"
            />
          </div>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button
            type="button"
            class="btn btn-dark mt-3"
            onClick="javascript:addReply();"
          >
            post reply
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestBook",
  components: {},
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
