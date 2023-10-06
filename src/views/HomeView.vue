<template>
  <div id="home">

    <div class="custom-navbar-container">
      <b-navbar class="custom-navbar py-4" toggleable="lg">
        <b-navbar-brand href="#">
          <img class="custom-navbar-img-desktop" src="../assets/img/logo.svg" alt="Suluhu Logo" height="30px">
          <img class="custom-navbar-img-mobile" src="../assets/img/logo.svg" alt="Suluhu Logo" height="20px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="custom-navbar-nav" justified>
            <b-nav-item class="px-2 custom-nav-text" href="#why-us">Why us</b-nav-item>
            <b-nav-item class="px-2 custom-nav-text" href="#products">Products</b-nav-item>
            <b-nav-item class="px-2 custom-nav-text" href="#about-us">About</b-nav-item>
            <b-nav-item class="px-2 custom-nav-text" href="#industries">Industries</b-nav-item>
            <b-nav-item class="px-2 custom-nav-text" href="#">Blogs</b-nav-item>
            <b-button class="custom-white-button" variant="light" href="#contact-us">Partner with us</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="custom-content">
      <b-row class="custom-home-desktop-mode mt-4">
        <b-col lg="6">
          <h1 class="custom-bold-text">Unlocking limitless possibilities.</h1>
          <h4 class="mt-4 text-muted">
            We provide MSMEs with an innovative and cutting-edge Lending-As-A-Service infrastructure to enable them to seamlessly offer targeted embedded finance options.
          </h4>
          <b-button size="lg" variant="none" class="custom-green-button mt-4">Sign me up</b-button>
        </b-col>
        <b-col lg="6">
          <img src="@/assets/img/banner1.png" alt="Mobile app admin banner" width="100%">
        </b-col>
      </b-row>

      <b-row class="custom-home-mobile-mode mt-4">
        <b-col sm="12">
          <img src="@/assets/img/banner1.png" alt="Mobile app admin banner" width="100%">
        </b-col>

        <b-col class="mt-4" sm="12">
          <h1 class="custom-bold-text text-center mt-4">Unlocking limitless possibilities.</h1>
          <h4 class="mt-4 text-muted text-center">
            We provide MSME's with cutting-edge LaaS infrastructure, empowering them to seamlessly access financial
            services, stress free.
          </h4>
          <div class="text-center">
            <b-button size="lg" variant="none" class="custom-green-button mt-4">Sign me up</b-button>
          </div>
        </b-col>
      </b-row>
    </div>

    <div id="why-us" class="custom-content">
      <b-card class="custom-card custom-mt-16">
        <b-row class="mt-2">
          <b-col lg="4" sm="12">
            <h5><font-awesome-icon class="px-2" :icon="['fas', 'link']" /> Comprehensive lending platform</h5>
            <p class="mt-4 text-muted">
              We provide a suite of solutions to take you from zero to hero.
              Harness the power of Artificial Intelligence and grow your
              loan portfolio 10x with Suluhu.
            </p>
          </b-col>

          <b-col lg="4" sm="12">
            <h5><font-awesome-icon class="px-2" :icon="['fas', 'bolt-lightning']" />Fast onboarding at no cost</h5>
            <p class="mt-4 text-muted">
              Experience seamless and swift onboarding at absolutely no cost. Effortlessly integrate our powerful tools
              into your operations and start reaping the benefits in no time.
            </p>
          </b-col>

          <b-col lg="4" sm="12">
            <h5><font-awesome-icon :icon="['fas', 'gears']" /> Dynamic solution for all</h5>
            <p class="mt-4 text-muted">
              Our offerings transcend boundaries, delivering unprecedented value to both financial and non-financial
              companies.
              Let us unlock growth opportunities together.
            </p>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <div id="products" class="custom-content">
      <div class="custom-mt-16 custom-content-heading">
        <h1 class="custom-bold-text">Come take a look</h1>
        <h5 class="text-muted">Here is a glimpse of the offerings awaiting your organisation.
          Get ready to embark on a journey where transformative solutions await, empowering your business to reach new
          heights
        </h5>
      </div>
    </div>

    <div>
      <b-row class="custom-row">
        <b-col class="custom-content">
          <b-card class="custom-card custom-cursor" @click="toggleCollapse('collapse-1')">
            <p class="text-muted">
              <b>Credit Scoring.</b>
              <font-awesome-icon class="custom-float-right" :icon="['fas', collapseIconOne]" size="lg" />
            </p>
            <b-collapse v-model="isCollapsedOne">
              The journey begins with our decision model.
              Delve deeper and assess the creditworthiness of your borrowers, with pin point accuracy.
              We have implemented both rule based and AI scoring engines to make scoring better than ever before.
            </b-collapse>
          </b-card>

          <b-card class="mt-2 custom-card custom-cursor" @click="toggleCollapse('collapse-2')">
            <p class="text-muted">
              <b>Loan Origination.</b>
              <font-awesome-icon class="custom-float-right" :icon="['fas', collapseIconTwo]" size="lg" />
            </p>
            <b-collapse id="collapse-2" v-model="isCollapsedTwo">
              We have adopted an omni-channel approach to enable you to reach your customers seamlessly across various touchpoints. 
            </b-collapse>
          </b-card>

          <b-card class="mt-2 custom-card custom-cursor" @click="toggleCollapse('collapse-3')">
            <p class="text-muted">
              <b>Loan Management.</b>
              <font-awesome-icon class="custom-float-right" :icon="['fas', collapseIconThree]" size="lg" />
            </p>
            <b-collapse id="collapse-3" v-model="isCollapsedThree">
              Monitor your disbursements, collections and overall business performance using detailed reports and dashboards.
            </b-collapse>
          </b-card>

          <b-card class="mt-2 custom-card custom-cursor" @click="toggleCollapse('collapse-4')">
            <p class="text-muted">
              <b>Debt Collection</b>
              <font-awesome-icon class="custom-float-right" :icon="['fas', collapseIconFour]" size="lg" />
            </p>
            <b-collapse id="collapse-4" v-model="isCollapsedFour">
              Access modern and comprehensive debt collection tools to enable you to grow and maintain a quality and performing portfolio. 
              Manage delinquent accounts and interact with borrowers to collect outstanding payments.
            </b-collapse>
          </b-card>

          <b-card class="mt-2 custom-card custom-cursor" @click="toggleCollapse('collapse-5')">
            <p class="text-muted">
              <b>CRM</b>
              <font-awesome-icon class="custom-float-right" :icon="['fas', collapseIconFive]" size="lg" />
            </p>
            <b-collapse id="collapse-5" v-model="isCollapsedFive">
              Improve your organization’s overall customer experience through personalized services and streamlined communication. 
              Our Customer Relationship Management solution facilitates proactive relationship management, identifying opportunities for cross-selling and upselling, 
              ultimately enhancing client satisfaction and driving long-term business growth.
            </b-collapse>
          </b-card>
        </b-col>

        <b-col lg="7" class="p-0">
          <img src="@/assets/img/bg-2.png" width="100%">
        </b-col>
      </b-row>
    </div>

    <div id="about-us" class="custom-about-us mt-4">
      <div class="custom-content">
        <b-row>
          <b-col lg="12">
            <h1 class="text-light mt-4"><b>Unlocking limitless opportunities for MSMEs across Africa</b></h1>
            <h3 class="text-light mt-4">Our Purpose</h3>
            <h5 class="text-light">
              Empower African MSMEs by providing accessible and inclusive financial services to drive economic growth and financial inclusion.
            </h5>

            <h3 class="text-light mt-4">Mission</h3>
            <h5 class="text-light">
              To provide African MSMEs with innovative lending-as-a-service solutions that integrate seamlessly into their business operations, 
              fostering their growth, and enabling them to unlock new opportunities.
            </h5>

            <h3 class="text-light mt-4">Vision</h3>
            <h5 class="text-light">
              To Revolutionize the financial landscape for MSMEs and drive economic empowerment across the African continent.
            </h5>
          </b-col>
        </b-row>

      </div>
    </div>

    <div id="industries" class="custom-mt-16 custom-content-heading">
      <h1 class="custom-bold-text">Industries we serve</h1>
      <h5 class="text-muted mt-4">
        We offer the perfect blend of innovation and affordability to match the
        dynamic needs for of different industries.
      </h5>
    </div>

    <div class="custom-content">
      <b-row>
        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-1.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">Micro-Finance Institutions</h5>
          </b-card>
        </b-col>

        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-2.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">SACCOs</h5>
          </b-card>
        </b-col>

        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-3.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">E-Commerce</h5>
          </b-card>
        </b-col>

        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-4.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">Pay As Yo Go</h5>
          </b-card>
        </b-col>

        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-6.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">Ride Hailing</h5>
          </b-card>
        </b-col>

        <b-col lg="4">
          <b-card class="custom-card mt-4">
            <div class="d-flex justify-content-center">
              <img src="@/assets/img/item-5.png" alt="MicroFinance Industry" class="img-fluid" width="100px">
            </div>
            <h5 class="text-center text-muted mt-4">Fintech</h5>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div id="contact-us" class="custom-content">
      <b-row>
        <b-col lg="6">
          <h1>Contact us today</h1>
          <h5 class="text-muted mt-4">
            Have a question or need assistance? We're here to help! Please feel free to reach out to our team.
            We look forward to hearing from you
          </h5>
        </b-col>
        <b-col lg="6">
          <b-card class="custom-card p-4" title="Contact details">

            <b-form-group class="mt-4" label="Email address:"
              description="We'll never share your email with anyone else.">
              <b-form-input class="custom-form" type="email" placeholder="Enter email" required></b-form-input>
            </b-form-group>

            <b-form-group class="mt-4" label="Subject Title:">
              <b-form-input class="custom-form" type="text" placeholder="Enter message title" required></b-form-input>
            </b-form-group>

            <b-form-group class="mt-4" label="Subject Title:">
              <b-form-textarea class="custom-form" type="email" placeholder="Enter message" rows="3"
                required></b-form-textarea>
            </b-form-group>

            <b-button size="lg" variant="none" class="custom-green-button mt-4">Submit</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import TopNavComponent from '@/components/TopNavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    TopNavComponent,
    FooterComponent
  },
  data() {
    return {
      isCollapsedOne: true,
      isCollapsedTwo: false,
      isCollapsedThree: false,
      isCollapsedFour: false,
      isCollapsedFive: false,
    }
  },

  computed: {
    collapseIconOne() {
      return this.isCollapsedOne ? 'angle-up' : 'angle-down'
    },

    collapseIconTwo() {
      return this.isCollapsedTwo ? 'angle-up' : 'angle-down'
    },

    collapseIconThree() {
      return this.isCollapsedThree ? 'angle-up' : 'angle-down'
    },

    collapseIconFour() {
      return this.isCollapsedFour ? 'angle-up' : 'angle-down'
    },

    collapseIconFive() {
      return this.isCollapsedFive ? 'angle-up' : 'angle-down'
    }
  },

  methods: {
    toggleCollapse(id) {
      if (id == "collapse-1") {
        this.isCollapsedOne = !this.isCollapsedOne
      }
      else if (id == "collapse-2") {
        this.isCollapsedTwo = !this.isCollapsedTwo
      }
      else if (id == "collapse-3") {
        this.isCollapsedThree = !this.isCollapsedThree
      }
      else if (id == "collapse-4") {
        this.isCollapsedFour = !this.isCollapsedFour
      }
      else if (id == "collapse-5") {
        this.isCollapsedFive = !this.isCollapsedFive
      }
    }
  }
}
</script>
