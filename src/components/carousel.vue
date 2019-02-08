<template>
  <div>
    <b-pagination-nav :link-gen="linkGen"
                      :page-gen="pageGen"
                      :number-of-pages="links.length"
                      v-model="currentPage" />
    <br>
    <p>
      Page #: {{ currentPage }}<br>
      Page Link: {{ pageLink }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    pageLink () {
      return this.linkGen(this.currentPage)
    }
  },
  data () {
    return {
      currentPage: 1,
      links: ['#foo', '#bar', '#baz', '#faz']
    }
  },
  methods: {
    linkGen (pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen (pageNum) {
      return this.links[pageNum - 1].slice(1)
    }
  }
}
</script>
