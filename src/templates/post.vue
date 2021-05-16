<template>
<layout>
  <div>
    <header
      class="masthead"
      :style="{
        'background-image': `url(${GRIDSOME_API_URL+$page.post.cover.url})`
      }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <span class="meta">
                on {{$page.post.created_at}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto"  v-html="mdToHtml($page.post.content)">
          </div>
        </div>
      </div>
    </article>
  </div>
  </layout>
</template>
<page-query>
query($id:ID){
  post:strapiPost(id:$id){
    id
    title
    content
    created_at
    cover{
      url
    }
    tags {
      id
      title
    }
  }
}
</page-query>

<script>
import MarkDown from 'markdown-it'
const md =new MarkDown()

export default {
  name: "postPage",
  methods: {
    mdToHtml(markdown){
      return  md.render(markdown)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>