<template>
  <article class="question-section">
    <div class="question-header" @click="isOpen = !isOpen">
      <p :class="isOpen ? 'active-tab' : 'tab'">{{ question }}</p>
      <img v-if="!isOpen" src="@/assets/icons/faq-close.svg" alt="faq-close" />
      <img v-if="isOpen" src="@/assets/icons/faq-open.svg" alt="faq-open" />
    </div>
    <div v-if="isOpen" class="question-answer">
      <p>
        <slot></slot>
      </p>
      <div class="confirmation">
        <p>Was this article helpful?</p>
        <div class="confirmation-container">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AccordionTab",
  props: {
    question: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.question-section {
  padding-block: 2.4rem 2rem;
  border-bottom: 1px solid rgba(26, 26, 26, 0.1);
  border-inline: none;
}

.question-section:nth-child(1) {
  border-top: 1px solid rgba(26, 26, 26, 0.1);
}

.question-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.question-header p {
  font-size: 2rem;
  color: var(--black);
  font-weight: 500;
}

.tab {
  opacity: 0.6;
}

.active-tab {
  opacity: 1;
}

.question-answer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 2.2rem 3.3rem;
  margin-top: 2rem;
  transition: all 0.25s;
}

.question-answer p {
  color: var(--black);
  opacity: 0.8;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0px;
}

.confirmation {
  margin-top: 3rem;
}

.confirmation button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--purple);
  background-color: var(--white);
  color: var(--purple);
  border-radius: 8px;
  font-size: 1.4rem;
  transition: 0.2s;
}

.confirmation button:hover,
.confirmation button:focus {
  background-color: var(--purple);
  color: var(--white);
}

.confirmation p {
  font-size: 1.4rem;
  color: var(--black);
  opacity: 0.5;
}

.confirmation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1.5rem;
  gap: 10px;
}
</style>