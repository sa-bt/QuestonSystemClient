<template>
  <div class="card mb-2" >
    <div class="card-body p-2 p-sm-3">
      <div class="media forum-item">
        <NuxtLink :to="`/threads/2`" data-toggle="collapse" data-target=".forum-content">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50"
            :alt="thread.user.name" >
        </NuxtLink>
        <div class="media-body">
          <h6>
            <NuxtLink :to="`/threads`" data-toggle="collapse" data-target=".forum-content"
                      class="text-body">{{thread.title}}
            </NuxtLink>
          </h6>
          <p class="text-secondary"> {{thread.content }}</p>
          <p class="text-muted"><a href="javascript:void(0)">drewdan</a> replied <span
            class="text-secondary font-weight-bold">13 minutes ago</span></p></div>
        <div class="text-muted small text-center align-self-center"><span
          class="d-none d-sm-inline-block"><i class="far fa-eye"></i> 19</span> <span><i
          class="far fa-comment ml-2"></i> 3</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Thread",
        props:{
            thread:{
                required:true,
                type:Object
            }
        }
    }
</script>

<style scoped>

</style>
