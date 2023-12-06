<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      nom: "",
      article: null,
      resume: null
    };
  },
  methods: {
    Send() {
      // Fetch articles
      axios.get('http://localhost:3002/articles/', {
        params: {
        titre: this.nom
        }
      })
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const id = response.data[0].id;

          // Fetch article details
          axios.get(`http://localhost:3002/articles/${id}`)
          .then(articleResponse => {
            this.article = articleResponse.data;
            console.log('Article details:', this.article);

            // Fetch resume based on the article
            this.fetchResume(id);
          })
          .catch(articleError => {
            console.error('Error fetching article details:', articleError);
          });
        } else {
          console.error('No articles found in the response');
        }
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
    },
    fetchResume(articleId) {
      // Fetch resume based on the article ID
      axios.get('http://localhost:3001/resume/', {
        params: {
          id: articleId
        }
      })
      .then(resumeResponse => {
        this.resume = resumeResponse.data;
        console.log('Resume:', this.resume);
      })
      .catch(resumeError => {
        console.error('Error fetching resume:', resumeError);
      });
    }
  },
};
</script>

<template>
  <div class="main">
    <h1>Recherche</h1>
    <div class="wrapper">
      <input type="text" v-model="nom" required placeholder="Chercher votre article...">
      <button @click="Send">Search</button>
    </div>
    <div v-if="article">
      <p>Article trouvé</p>
      <p>{{ article.titre }}</p>
      <span>Prix: {{ article.prix }} $</span><br />
      <span>Auteur: {{ article.auteur }}</span>
    </div>
    <p v-for="r in resume" :key="r.id">{{ r.resum }}</p>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
