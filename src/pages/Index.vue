<template>
  <layout>
    <!-- Page Header-->
    <header class="masthead" 
    :style="{
      'background-image': `url(${GRIDSOME_API_URL+general.cover.url})`
      }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{general.title}}</h1>
              <span class="subheading">{{general.subTitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
            </g-link>
            <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            <p class="post-meta">on {{ edge.node.created_at }}</p>
            <p>
              <span>
                <g-link
                  :to="'/tag/' + tag.id"
                  v-for="tag in edge.node.tags"
                  :key="tag.id"
                >
                  {{ tag.title }}
                </g-link>
              </span>
            </p>

            <hr />
          </div>
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </layout>
</template>
<page-query>
query($page: Int){
  posts:allStrapiPost(perPage: 2, page: $page) @paginate{
   	pageInfo {
      totalPages
      currentPage
    }
     edges{
      node {
        id
        title
  			tags{
          id
          title
        }
        created_at
      }
    }
  }
  general:allStrapiGeneral {
  		edges{
        node{
          id
          title
          subTitle
          cover{
            url
          }
        }
      }
  }
}

 

</page-query>
<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
  computed:{
    general(){
      return this.$page.general.edges[0].node
    }
  },
  metaInfo: {
    title: "Hello, world!",
  },
  name: "indexPage",
};
</script>

<style>
</style>
