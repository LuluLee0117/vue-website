<template>
  <div class="container mx-auto p-8">
    <!-- Tarot Section -->
    <section class="about bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-4xl font-bold mb-6">
        <font-awesome-icon icon="star" class="text-primary mr-2"/> 
        Tarot Cards
      </h1>
      <p class="text-lg mb-8">
        <font-awesome-icon icon="info-circle" class="text-primary mr-2"/> 
        Discover the world of Tarot cards. Each card has its own unique meaning and symbolism. Choose a category below to explore the meanings of the cards.
      </p>

      <!-- Selection Section -->
      <div class="selection mb-8">
        <button @click="selectArcana('major')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          <font-awesome-icon icon="sun" class="text-white mr-2"/> 
          Major Arcana
        </button>
        <button @click="selectArcana('minor')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          <font-awesome-icon icon="moon" class="text-white mr-2"/> 
          Minor Arcana
        </button>
      </div>

      <!-- Major Arcana Section -->
      <div v-if="selectedArcana === 'major'" class="major-arcana mb-8">
        <h2 class="text-2xl font-bold mb-4">Major Arcana</h2>
        <table class="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th class="px-4 py-2">Card</th>
              <th class="px-4 py-2">Upright Meaning</th>
              <th class="px-4 py-2">Reversed Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in majorArcanaCards" :key="card.name">
              <td class="border px-4 py-2">{{ card.name }}</td>
              <td class="border px-4 py-2">{{ card.upright }}</td>
              <td class="border px-4 py-2">{{ card.reversed }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Minor Arcana Section -->
      <div v-if="selectedArcana === 'minor'" class="minor-arcana mb-8">
        <h2 class="text-2xl font-bold mb-4">Minor Arcana</h2>
        <div class="selection mb-8">
          <button @click="selectSuit('cups')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            <font-awesome-icon icon="glass-whiskey" class="text-white mr-2"/> 
            Cups
          </button>
          <button @click="selectSuit('wands')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            <font-awesome-icon icon="magic" class="text-white mr-2"/> 
            Wands
          </button>
          <button @click="selectSuit('pentacles')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            <font-awesome-icon icon="coins" class="text-white mr-2"/> 
            Pentacles
          </button>
          <button @click="selectSuit('swords')" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            <font-awesome-icon icon="sword" class="text-white mr-2"/> 
            Swords
          </button>
        </div>
        <div v-if="selectedSuit">
          <h3 class="text-xl font-bold mb-4">{{ capitalize(selectedSuit) }}</h3>
          <table class="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th class="px-4 py-2">Card</th>
                <th class="px-4 py-2">Upright Meaning</th>
                <th class="px-4 py-2">Reversed Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="card in minorArcanaCards[selectedSuit]" :key="card.name">
                <td class="border px-4 py-2">{{ card.name }}</td>
                <td class="border px-4 py-2">{{ card.upright }}</td>
                <td class="border px-4 py-2">{{ card.reversed }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Drawn Card Section -->
      <button @click="drawCard" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
        <font-awesome-icon icon="dice" class="text-white mr-2"/> 
        Draw a Card
      </button>
      <div v-if="drawnCard" class="drawn-card bg-white text-textPrimary p-8 shadow-md rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">Drawn Card</h2>
        <img :src="drawnCard.image" alt="Drawn Card Image" class="card-image mb-4">
        <p class="mb-4"><strong>{{ drawnCard.name }}</strong></p>
        <p class="mb-4">{{ drawnCard.description }}</p>
        <p class="mb-4"><strong>Upright:</strong> {{ drawnCard.upright }}</p>
        <p class="mb-4"><strong>Reversed:</strong> {{ drawnCard.reversed }}</p>
        <button @click="drawnCard = null" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <font-awesome-icon icon="arrow-left" class="text-white mr-2"/> 
          Back to Cards
        </button>
      </div>

      <!-- Additional Information Section -->
      <div class="additional-info mb-8">
        <h2 class="text-2xl font-bold mb-4">
          <font-awesome-icon icon="book" class="text-primary mr-2"/> 
          Additional Information
        </h2>
        <p class="mb-4">Tarot reading can provide valuable insights and guidance on various aspects of life. Each reading is unique and tailored to the individual's situation.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TarotView',
  data() {
    return {
      selectedArcana: null,
      selectedSuit: null,
      drawnCard: null,
      majorArcanaCards: [
        { name: 'The Fool', upright: 'New beginnings, adventure, taking risks.', reversed: 'Recklessness, fear of the unknown.', image: 'images/Tarota/fool.png' },
        { name: 'The Magician', upright: 'Creativity, resourcefulness, manifesting your desires.', reversed: 'Manipulation, poor planning.', image: 'images/Tarota/ma.png' },
        { name: 'The High Priestess', upright: 'Intuition, unconscious knowledge.', reversed: 'Lack of center, lost inner voice.', image: 'images/Tarota/high.png' },
        { name: 'The Empress', upright: 'Fertility, femininity, beauty, nature, abundance.', reversed: 'Creative block, dependence on others.', image: 'images/Tarota/em.jpeg' },
        { name: 'The Emperor', upright: 'Authority, structure, control, fatherhood.', reversed: 'Domination, excessive control, rigidity, inflexibility.', image: 'images/Tarota/emp.jpeg' },
        { name: 'The Hierophant', upright: 'Spiritual wisdom, religious beliefs, conformity, tradition, institutions.', reversed: 'Personal beliefs, freedom, challenging the status quo.', image: 'images/Tarota/hie.jpe' },
        { name: 'The Lovers', upright: 'Love, harmony, relationships, values alignment, choices.', reversed: 'Self-love, disharmony, imbalance, misalignment of values.', image: 'images/Tarota/love.jpeg' },
        { name: 'The Chariot', upright: 'Control, willpower, success, action, determination.', reversed: 'Self-discipline, opposition, lack of direction.', image: 'images/Tarota/cha.png' },
        { name: 'Strength', upright: 'Strength, courage, persuasion, influence, compassion.', reversed: 'Inner strength, self-doubt, low energy, raw emotion.', image: 'images/Tarota/str.png' },
        { name: 'The Hermit', upright: 'Soul-searching, introspection, being alone, inner guidance.', reversed: 'Isolation, loneliness, withdrawal.', image: 'images/Tarota/her.png' },
        { name: 'Wheel of Fortune', upright: 'Good luck, karma, life cycles, destiny, a turning point.', reversed: 'Bad luck, resistance to change, breaking cycles.', image: 'images/Tarota/wheel.png' },
        { name: 'Justice', upright: 'Justice, fairness, truth, cause and effect, law.', reversed: 'Unfairness, lack of accountability, dishonesty.', image: 'images/Tarota/justice.png' },
        { name: 'The Hanged Man', upright: 'Pause, surrender, letting go, new perspectives.', reversed: 'Delays, resistance, stalling, indecision.', image: 'images/Tarota/hanged_man.png' },
        { name: 'Death', upright: 'Endings, change, transformation, transition.', reversed: 'Resistance to change, personal transformation, inner purging.', image: 'images/Tarota/death.png' },
        { name: 'Temperance', upright: 'Balance, moderation, patience, purpose.', reversed: 'Imbalance, excess, self-healing, re-alignment.', image: 'images/Tarota/temperance.png' },
        { name: 'The Devil', upright: 'Shadow self, attachment, addiction, restriction, sexuality.', reversed: 'Releasing limiting beliefs, exploring dark thoughts, detachment.', image: 'images/Tarota/devil.png' },
        { name: 'The Tower', upright: 'Sudden change, upheaval, chaos, revelation, awakening.', reversed: 'Personal transformation, fear of change, averting disaster.', image: 'images/Tarota/tower.png' },
        { name: 'The Star', upright: 'Hope, faith, purpose, renewal, spirituality.', reversed: 'Lack of faith, despair, self-trust, disconnection.', image: 'images/Tarota/star.png' },
        { name: 'The Moon', upright: 'Illusion, fear, anxiety, subconscious, intuition.', reversed: 'Release of fear, repressed emotion, inner confusion.', image: 'images/Tarota/moon.png' },
        { name: 'The Sun', upright: 'Positivity, fun, warmth, success, vitality.', reversed: 'Inner child, feeling down, overly optimistic.', image: 'images/Tarota/sun.png' },
        { name: 'Judgement', upright: 'Judgement, rebirth, inner calling, absolution.', reversed: 'Self-doubt, inner critic, ignoring the call.', image: 'images/Tarota/judgement.png' },
        { name: 'The World', upright: 'Completion, integration, accomplishment, travel.', reversed: 'Seeking personal closure, short-cuts, delays.', image: 'images/Tarota/world.png' },
      ],
      minorArcanaCards: {
        cups: [
          { name: 'Ace of Cups', upright: 'New emotions, relationships, creativity.', reversed: 'Emotional loss, blocked creativity.', image: 'images/Tarota/ace_of_cups.png' },
          { name: 'Two of Cups', upright: 'Partnership, love, mutual respect.', reversed: 'Breakup, imbalance in a relationship.', image: 'images/Tarota/two_of_cups.png' },
          { name: 'Three of Cups', upright: 'Celebration, friendship, creativity, community.', reversed: 'Overindulgence, gossip, isolation.', image: 'images/Tarota/three_of_cups.png' },
          { name: 'Four of Cups', upright: 'Meditation, contemplation, apathy, re-evaluation.', reversed: 'Retreat, withdrawal, checking in for alignment.', image: 'images/Tarota/four_of_cups.png' },
          { name: 'Five of Cups', upright: 'Regret, failure, disappointment, pessimism.', reversed: 'Personal setbacks, self-forgiveness, moving on.', image: 'images/Tarota/five_of_cups.png' },
          { name: 'Six of Cups', upright: 'Revisiting the past, childhood memories, innocence, joy.', reversed: 'Living in the past, forgiveness, lacking playfulness.', image: 'images/Tarota/six_of_cups.png' },
          { name: 'Seven of Cups', upright: 'Opportunities, choices, wishful thinking, illusion.', reversed: 'Alignment, personal values, overwhelmed by choices.', image: 'images/Tarota/seven_of_cups.png' },
          { name: 'Eight of Cups', upright: 'Disappointment, abandonment, withdrawal, escapism.', reversed: 'Trying one more time, indecision, aimless drifting, walking away.', image: 'images/Tarota/eight_of_cups.png' },
          { name: 'Nine of Cups', upright: 'Contentment, satisfaction, gratitude, wish come true.', reversed: 'Inner happiness, materialism, dissatisfaction, indulgence.', image: 'images/Tarota/nine_of_cups.png' },
          { name: 'Ten of Cups', upright: 'Divine love, blissful relationships, harmony, alignment.', reversed: 'Disconnection, misaligned values, struggling relationships.', image: 'images/Tarota/ten_of_cups.png' },
          { name: 'Page of Cups', upright: 'Creative opportunities, intuitive messages, curiosity, possibility.', reversed: 'New ideas, doubting intuition, creative blocks, emotional immaturity.', image: 'images/Tarota/page_of_cups.png' },
          { name: 'Knight of Cups', upright: 'Romance, charm, imagination, beauty.', reversed: 'Overactive imagination, unrealistic, jealousy, moodiness.', image: 'images/Tarota/knight_of_cups.png' },
          { name: 'Queen of Cups', upright: 'Compassion, calm, comfort, nurturing, healing.', reversed: 'Emotional insecurity, co-dependency.', image: 'images/Tarota/queen_of_cups.png' },
          { name: 'King of Cups', upright: 'Emotional balance and control, generosity.', reversed: 'Emotional manipulation, moodiness, volatility.', image: 'images/Tarota/king_of_cups.png' },
       ],
        wands: [
          { name: 'Ace of Wands', upright: 'New inspiration, creativity, potential.', reversed: 'Delays, lack of motivation.', image: 'images/Tarota/ace_of_wands.png' },
          { name: 'Two of Wands', upright: 'Planning, progress, decision-making.', reversed: 'Fear of unknown, lack of planning.', image: 'images/Tarota/two_of_wands.png' },
          { name: 'Three of Wands', upright: 'Expansion, foresight, overseas opportunities.', reversed: 'Playing small, lack of foresight, unexpected delays.', image: 'images/Tarota/three_of_wands.png' },
          { name: 'Four of Wands', upright: 'Celebration, harmony, marriage, home, community.', reversed: 'Personal celebration, inner harmony, conflict with others.', image: 'images/Tarota/four_of_wands.png' },
          { name: 'Five of Wands', upright: 'Conflict, disagreements, competition, tension, diversity.', reversed: 'Inner conflict, conflict avoidance, tension release.', image: 'images/Tarota/five_of_wands.png' },
          { name: 'Six of Wands', upright: 'Success, public recognition, progress, self-confidence.', reversed: 'Private achievement, personal definition of success, fall from grace, egotism.', image: 'images/Tarota/six_of_wands.png' },
          { name: 'Seven of Wands', upright: 'Challenge, competition, protection, perseverance.', reversed: 'Exhaustion, giving up, overwhelmed.', image: 'images/Tarota/seven_of_wands.png' },
          { name: 'Eight of Wands', upright: 'Movement, fast-paced change, action, alignment, air travel.', reversed: 'Delays, frustration, resisting change, internal alignment.', image: 'images/Tarota/eight_of_wands.png' },
          { name: 'Nine of Wands', upright: 'Resilience, courage, persistence, test of faith, boundaries.', reversed: 'Inner resources, struggle, overwhelm, defensive, paranoia.', image: 'images/Tarota/nine_of_wands.png' },
          { name: 'Ten of Wands', upright: 'Burden, extra responsibility, hard work, completion.', reversed: 'Doing it all, carrying the burden, delegation, release.', image: 'images/Tarota/ten_of_wands.png' },
          { name: 'Page of Wands', upright: 'Inspiration, ideas, discovery, limitless potential, free spirit.', reversed: 'Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path.', image: 'images/Tarota/page_of_wands.png' },
          { name: 'Knight of Wands', upright: 'Energy, passion, inspired action, adventure, impulsiveness.', reversed: 'Passion project, haste, scattered energy, delays, frustration.', image: 'images/Tarota/knight_of_wands.png' },
          { name: 'Queen of Wands', upright: 'Courage, confidence, independence, social butterfly, determination.', reversed: 'Self-respect, self-confidence, introverted, re-establish sense of self.', image: 'images/Tarota/queen_of_wands.png' },
          { name: 'King of Wands', upright: 'Natural-born leader, vision, entrepreneur, honor.', reversed: 'Impulsiveness, haste, ruthless, high expectations.', image: 'images/Tarota/king_of_wands.png' },
         ],
        pentacles: [
          { name: 'Ace of Pentacles', upright: 'New financial opportunities, prosperity.', reversed: 'Lost opportunity, lack of planning.', image: 'images/Tarota/ace_of_pentacles.png' },
          { name: 'Two of Pentacles', upright: 'Balance, adaptability, time management.', reversed: 'Overwhelmed, lack of balance.', image: 'images/Tarota/two_of_pentacles.png' },
          { name: 'Three of Pentacles', upright: 'Teamwork, collaboration, learning, implementation.', reversed: 'Disharmony, misalignment, working alone.', image: 'images/Tarota/three_of_pentacles.png' },
          { name: 'Four of Pentacles', upright: 'Saving money, security, conservatism, scarcity, control.', reversed: 'Over-spending, greed, self-protection.', image: 'images/Tarota/four_of_pentacles.png' },
          { name: 'Five of Pentacles', upright: 'Financial loss, poverty, lack mindset, isolation, worry.', reversed: 'Recovery from financial loss, spiritual poverty.', image: 'images/Tarota/five_of_pentacles.png' },
          { name: 'Six of Pentacles', upright: 'Giving, receiving, sharing wealth, generosity, charity.', reversed: 'Self-care, unpaid debts, one-sided charity.', image: 'images/Tarota/six_of_pentacles.png' },
          { name: 'Seven of Pentacles', upright: 'Long-term view, sustainable results, perseverance, investment.', reversed: 'Lack of long-term vision, limited success or reward.', image: 'images/Tarota/seven_of_pentacles.png' },
          { name: 'Eight of Pentacles', upright: 'Apprenticeship, repetitive tasks, mastery, skill development.', reversed: 'Self-development, perfectionism, misdirected activity.', image: 'images/Tarota/eight_of_pentacles.png' },
          { name: 'Nine of Pentacles', upright: 'Abundance, luxury, self-sufficiency, financial independence.', reversed: 'Self-worth, over-investment in work, hustling.', image: 'images/Tarota/nine_of_pentacles.png' },
          { name: 'Ten of Pentacles', upright: 'Wealth, financial security, family, long-term success, contribution.', reversed: 'The dark side of wealth, financial failure or loss.', image: 'images/Tarota/ten_of_pentacles.png' },
          { name: 'Page of Pentacles', upright: 'Manifestation, financial opportunity, skill development.', reversed: 'Lack of progress, procrastination, learn from failure.', image: 'images/Tarota/page_of_pentacles.png' },
          { name: 'Knight of Pentacles', upright: 'Hard work, productivity, routine, conservatism.', reversed: 'Self-discipline, boredom, feeling stuck, perfectionism.', image: 'images/Tarota/knight_of_pentacles.png' },
          { name: 'Queen of Pentacles', upright: 'Nurturing, practical, providing financially, a working parent.', reversed: 'Financial independence, self-care, work-home conflict.', image: 'images/Tarota/queen_of_pentacles.png' },
          { name: 'King of Pentacles', upright: 'Wealth, business, leadership, security, discipline, abundance.', reversed: 'Financially inept, obsessed with wealth and status, stubborn.', image: 'images/Tarota/king_of_pentacles.png' },
        ],
        swords: [
          { name: 'Ace of Swords', upright: 'New ideas, clarity, intellectual power.', reversed: 'Confusion, miscommunication.', image: 'images/Tarota/ace_of_swords.png' },
          { name: 'Two of Swords', upright: 'Indecision, choices, mental conflict.', reversed: 'Indecision, lesser of two evils.', image: 'images/Tarota/two_of_swords.png' },
          { name: 'Three of Swords', upright: 'Heartbreak, emotional pain, sorrow, grief, hurt.', reversed: 'Negative self-talk, releasing pain, optimism, forgiveness.', image: 'images/Tarota/three_of_swords.png' },
          { name: 'Four of Swords', upright: 'Rest, relaxation, meditation, contemplation, recuperation.', reversed: 'Exhaustion, burnout, deep contemplation, stagnation.', image: 'images/Tarota/four_of_swords.png' },
          { name: 'Five of Swords', upright: 'Conflict, disagreements, competition, defeat, winning at all costs.', reversed: 'Reconciliation, making amends, past resentment.', image: 'images/Tarota/five_of_swords.png' },
          { name: 'Six of Swords', upright: 'Transition, change, rite of passage, releasing baggage.', reversed: 'Personal transition, resistance to change, unfinished business.', image: 'images/Tarota/six_of_swords.png' },
          { name: 'Seven of Swords', upright: 'Betrayal, deception, getting away with something, acting strategically.', reversed: 'Imposter syndrome, self-deceit, keeping secrets.', image: 'images/Tarota/seven_of_swords.png' },
          { name: 'Eight of Swords', upright: 'Negative thoughts, self-imposed restriction, imprisonment, victim mentality.', reversed: 'Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives.', image: 'images/Tarota/eight_of_swords.png' },
          { name: 'Nine of Swords', upright: 'Anxiety, worry, fear, depression, nightmares.', reversed: 'Inner turmoil, deep-seated fears, secrets, releasing worry.', image: 'images/Tarota/nine_of_swords.png' },
          { name: 'Ten of Swords', upright: 'Painful endings, deep wounds, betrayal, loss, crisis.', reversed: 'Recovery, regeneration, resisting an inevitable end.', image: 'images/Tarota/ten_of_swords.png' },
          { name: 'Page of Swords', upright: 'New ideas, curiosity, thirst for knowledge, new ways of communicating.', reversed: 'Self-expression, all talk and no action, haphazard action, haste.', image: 'images/Tarota/page_of_swords.png' },
          { name: 'Knight of Swords', upright: 'Ambitious, action-oriented, driven to succeed, fast-thinking.', reversed: 'Restless, unfocused, impulsive, burn-out.', image: 'images/Tarota/knight_of_swords.png' },
          { name: 'Queen of Swords', upright: 'Independent, unbiased judgement, clear boundaries, direct communication.', reversed: 'Overly-emotional, easily influenced, bitchy, cold-hearted.', image: 'images/Tarota/queen_of_swords.png' },
          { name: 'King of Swords', upright: 'Mental clarity, intellectual power, authority, truth.', reversed: 'Quiet power, inner truth, misuse of power, manipulation.', image: 'images/Tarota/king_of_swords.png' },
        ],
      },
    };
  },
  methods: {
    selectArcana(arcana) {
      this.selectedArcana = arcana;
      this.selectedSuit = null;
      this.drawnCard = null;
    },
    selectSuit(suit) {
      this.selectedSuit = suit;
    },
    drawCard() {
      const allCards = [...this.majorArcanaCards, ...this.minorArcanaCards.cups, ...this.minorArcanaCards.wands, ...this.minorArcanaCards.pentacles, ...this.minorArcanaCards.swords];
      const randomIndex = Math.floor(Math.random() * allCards.length);
      this.drawnCard = allCards[randomIndex];
    },
    capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style scoped>
.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.bg-primary {
  background-color: #6a5acd; 
}

.bg-primary-dark {
  background-color: #5a4abd; 
}

.card-image {
  width: 300px;
  height: 550px;
  object-fit: cover; 
}
</style>
