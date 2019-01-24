<!-- component-payment -->
<template>
  <div class="section-payment">
    <div class="payment-order-summary" :class="[openSummary ? 'open' : 'close']" @click="openSummary = !openSummary">
      <div class="payment-order-summary-header">
        <span class="iconfont icon-gouwuche"></span>
        <span class="title">Order Summary</span>
        <span class="iconfont icon-xiala"></span>
        <span class="total-money">$77.99</span>
      </div>
      <div class="payment-order-summary-detail" v-if="openSummary">
        <div class="detail-main">
          <div class="order-img">
            <span class="num">2</span>
          </div>
          <div class="order-detail">
            <p class="p1">chanpinmingcheng</p>
            <p class="p2">Buy2, Get 50%OFF</p>
          </div>
          <div class="order-money">
            <p>$77.99</p>
            <p></p>
          </div>
        </div>
        <div class="detail-shipping">
          <span>Shipping</span>
          <span>$20.00</span>
        </div>
      </div>
    </div>

    <p class="payment-tips payment-tips1">Complete Your Order</p>

    <p class="btn paypal-btn"></p>

    <div class="payment-address">
      <div class="payment-tips2">Or Pay With <span>Credit Card</span></div>
      <form class="payment-address-form">
        <p class="form-title">Address Information</p>

        <p class="form-section email" :class="{input: formData.email.status === 1, correct: formData.email.status === 2, error: formData.email.status === 3}">
          <label for="email" v-if="formData.email.status !== 0">{{ formData.email.label }}</label>
          <input type="text" placeholder="Email:" v-model="formData.email.value" @keyup="formData['email'].status = 1">
        </p>

        <p class="form-section name" :class="{input: formData.name.status === 1, correct: formData.name.status === 2, error: formData.name.status === 3}">
          <label for="name" v-if="formData.name.status !== 0">{{ formData.name.label }}</label>
          <input type="text" placeholder="Name:" v-model="formData.name.value" @keyup="formData['name'].status = 1">
        </p>

        <p class="form-section address" :class="{input: formData.address.status === 1, correct: formData.address.status === 2, error: formData.address.status === 3}">
          <label for="address" v-if="formData.address.status !== 0">{{ formData.address.label }}</label>
          <input type="text" placeholder="Address:" v-model="formData.address.value" @keyup="formData['address'].status = 1">
        </p>

        <p class="form-section city" :class="{input: formData.city.status === 1, correct: formData.city.status === 2, error: formData.city.status === 3}">
          <label for="city" v-if="formData.city.status !== 0">{{ formData.city.label }}</label>
          <input type="text" placeholder="Town/City:" v-model="formData.city.value" @keyup="formData['city'].status = 1">
        </p>

        <p class="form-section select country">
          <label for="country">{{ formData.country.label }}</label>
          <select name="" id="country" v-model="formData.country.value" @change="countryChange">
            <option v-for="(item, key, index) in countriesData" :key="index" :value="item.code">{{ key }}</option>
          </select>
        </p>

        <p class="form-section select province" v-if="formData.province.show">
          <label for="province">{{ formData.province.label }}</label>
          <select name="" id="province" v-model="formData.province.value">
            <option v-for="(item, key, index) in provincesData" :key="index" :value="item.code">{{ key }}</option>
          </select>
        </p>

        <p class="form-section postal" :class="{input: formData.postal.status === 1, correct: formData.postal.status === 2, error: formData.postal.status === 3}">
          <label for="postal" v-if="formData.postal.status !== 0">{{ formData.postal.label }}</label>
          <input type="text" placeholder="Postal Code:" v-model="formData.postal.value" @keyup="formData['postal'].status = 1">
        </p>

        <p class="form-section phone" :class="{input: formData.phone.status === 1, correct: formData.phone.status === 2, error: formData.phone.status === 3}">
          <label for="phone" v-if="formData.phone.status !== 0">{{ formData.phone.label }}</label>
          <input type="text" placeholder="Phone:" v-model="formData.phone.value" @keyup="formData['phone'].status = 1">
        </p>

        <p class="payment-tips3">Please check the order information carefully and click NEXT after confirmation.</p>

        <p class="btn btn-next" @click="nextBtnClick">NEXT</p>
      </form>
    </div>

    <transition name="fade">
      <div class="payment-shipping-payment" v-if="shipping.show">

        <div class="payment-shipping">
          <form class="payment-shipping-form">
            <p class="form-title">Shipping Method</p>

            <p class="form-section select shipping">
              <label for="country">Free Shipping:</label>
              <select name="" id="shipping">
                <option value="Free">Free</option>
              </select>
            </p>

            <p class="payment-tips4">Fast Shipping saves about 7 days of transportation time.</p>
          </form>
        </div>

        <div class="payment-method">
          <form class="payment-method-form">
            <p class="form-title">Payment Method</p>

            <div class="payment-method-links">
              <span><img src="@/common/image/visa.png" alt=""></span>
              <span><img src="@/common/image/master-card.png" alt=""></span>
              <span><img src="@/common/image/express.png" alt=""></span>
              <span><img src="@/common/image/discover.png" alt=""></span>
            </div>

            <p class="form-section card" :class="{input: formData.card.status === 1, correct: formData.card.status === 2, error: formData.card.status === 3}">
              <label for="card" v-if="formData.card.status !== 0">{{ formData.card.label }}</label>
              <input type="tel" size="19" id="cardNum" placeholder="Card Number:" v-model="formData.card.value" @keyup="formData['card'].status = 1">
            </p>

            <p class="form-section date" :class="{input: formData.date.status === 1, correct: formData.date.status === 2, error: formData.date.status === 3}">
              <label for="date" v-if="formData.date.status !== 0">{{ formData.date.label }}</label>
              <input type="tel" size="7" id="cardDate" placeholder="MM/YY:" v-model="formData.date.value" @keyup="formData['date'].status = 1">
            </p>

            <p class="form-section cvc" :class="{input: formData.cvc.status === 1, correct: formData.cvc.status === 2, error: formData.cvc.status === 3}">
              <label for="cvc" v-if="formData.cvc.status !== 0">{{ formData.cvc.label }}</label>
              <input type="tel" size="4" id="cardCvc" placeholder="CVC:" v-model="formData.cvc.value" pattern="[0-9]*" @keyup="formData['cvc'].status = 1">
              <span class="cvc-info-btn iconfont icon-wenhao" @click="cvcinfoClick"></span>
              <span class="cvc-info" v-if="formData.cvc.info">3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.</span>
            </p>

            <p class="btn btn-complete" @click="completeBtnClick">COMPLETE ORDER</p>
          </form>
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import { addressData } from '@/utils/address'
// import { scrollLinearTo } from '@/utils/scroll'
export default {
  data () {
    return {
      openSummary: false,
      formData: {
        email: {
          label: 'Email:',
          status: 0, // 0-none 1-input 2-correct 3-error
          value: ''
        },
        name: {
          label: 'Name:',
          status: 0,
          value: ''
        },
        address: {
          label: 'Address:',
          status: 0,
          value: ''
        },
        city: {
          label: 'Town/City:',
          status: 0,
          value: ''
        },
        country: {
          label: 'Country:',
          status: 0,
          value: ''
        },
        province: {
          label: 'Province:',
          status: 0,
          value: '',
          show: true
        },
        postal: {
          label: 'Postal Code:',
          status: 0,
          value: ''
        },
        phone: {
          label: 'Phone:',
          status: 0,
          value: ''
        },
        card: {
          label: 'Card Number:',
          status: 0,
          value: ''
        },
        date: {
          label: 'MM/YY:',
          status: 0,
          value: ''
        },
        cvc: {
          label: 'CVC:',
          status: 0,
          value: '',
          info: false
        }
      },
      provincesData: {},
      shipping: {
        show: false
      },
      dateStore: ''
    }
  },
  components: {},
  computed: {
    countriesData () {
      return addressData
    }
  },
  methods: {
    init () {
      // init countries and provinces
      let CT = 'United States'
      let IC = this.countriesData[CT]
      let IP = this.countriesData[CT].provinces
      this.provincesData = IP
      this.formData.country.value = IC.code
      this.formData.province.label = IC.labels.province
      let t = Object.keys(IP)[0]
      this.formData.province.value = IP[t].code
    },
    countryChange (e) {
      let text = e.target.options[e.target.selectedIndex].text
      if (this.countriesData[text].provinces) {
        this.formData.province.show = true
        this.provincesData = this.countriesData[text].provinces
        let provinceText = Object.keys(this.provincesData)[0]
        this.formData.province.label = this.countriesData[text].labels.province + ':'
        this.formData.province.value = this.provincesData[provinceText].code
      } else {
        this.formData.province.show = false
        this.provincesData = {}
        this.formData.province.value = ''
      }
    },
    nextBtnClick () {
      let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      let fd = this.formData
      // emial
      if (!regEmail.test(fd.email.value)) {
        fd.email.label = 'Incorrect Email'
        fd.email.status = 3
      } else {
        fd.email.label = 'Email:'
        fd.email.status = 2
      }
      // name
      if (fd.name.value === '') {
        fd.name.label = 'Incorrect Name'
        fd.name.status = 3
      } else {
        fd.name.label = 'Name:'
        fd.name.status = 2
      }
      // address
      if (fd.address.value === '') {
        fd.address.label = 'Incorrect Address'
        fd.address.status = 3
      } else {
        fd.address.label = 'Address:'
        fd.address.status = 2
      }
      // city
      if (fd.city.value === '') {
        fd.city.label = 'Incorrect Town/City'
        fd.city.status = 3
      } else {
        fd.city.label = 'Town/City:'
        fd.city.status = 2
      }
      // postal
      if (fd.postal.value === '') {
        fd.postal.label = 'Incorrect postal'
        fd.postal.status = 3
      } else {
        fd.postal.label = 'Postal Code:'
        fd.postal.status = 2
      }
      if (fd.email.status === 2 && fd.name.status === 2 && fd.address.status === 2 && fd.city.status === 2 && fd.postal.status === 2) {
        console.log('to do axios')
      } else {
        console.log('has error')
      }

      this.shipping.show = true
      // crad-form init
      let icn = document.getElementById('cardNum')
      this.$payform.cardNumberInput(icn)
      let icd = document.getElementById('cardDate')
      this.$payform.expiryInput(icd)
      let icc = document.getElementById('cardCvc')
      this.$payform.cvcInput(icc)

      // get scroll px
      setTimeout(() => {
        let h = document.querySelector('.payment-shipping-payment').offsetTop
        window.scrollTo(0, h)
      }, 0)
    },
    cvcinfoClick () {
      this.formData.cvc.info = !this.formData.cvc.info
      setTimeout(() => {
        this.formData.cvc.info = !this.formData.cvc.info
      }, 8000)
    },
    completeBtnClick () {
      let fd = this.formData
      // card
      if (fd.card.value === '' || !this.$payform.validateCardNumber(fd.card.value)) {
        fd.card.label = 'Incorrect Card Number'
        fd.card.status = 3
      } else {
        fd.card.label = 'Card Number:'
        fd.card.status = 2
      }
      // date
      if (fd.date.value === '' || !this.$payform.validateCardExpiry(fd.date.value.split('/')[0], fd.date.value.split('/')[1])) {
        fd.date.label = 'Incorrect MM/YY'
        fd.date.status = 3
      } else {
        fd.date.label = 'MM/YY:'
        fd.date.status = 2
      }
      // cvc
      if (fd.cvc.value === '' || !this.$payform.validateCardCVC(fd.cvc.value)) {
        fd.cvc.label = 'Incorrect CVC'
        fd.cvc.status = 3
      } else {
        fd.cvc.label = 'CVC:'
        fd.cvc.status = 2
      }
    }
  },
  created () {
  },
  mounted () {
    this.init()
  }
}

</script>

<style scoped lang="stylus">
@import './main';
</style>
