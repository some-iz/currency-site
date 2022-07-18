<template>
  <section v-if="haveQuery" class="container-fluid px-1 px-sm-3">
    <div class="row mx-0 mt-3">
      <exchange class="col-md-12 px-0 px-sm-2"></exchange>

      <div class="w-100 mt-4 pt-1 col-md-12 px-0 px-sm-2">
        <tabbar @sendActiveTab="sendActiveTab($event)" :tabItems="['معرفی ارز','چارت ها','سوالات متداول']"></tabbar>
        <div class="py-3 px-2" v-if="activeTab === 0">
          <section class="currency__bio row d-flex justify-content-center">
            <div class="col-12" data-v-2aa63d2e="">
              <div data-v-2aa63d2e="">
                <h2 class="text-aligned text-primary mb-16 fw-bold fs-19-sm fs-26-md" data-v-2aa63d2e="">
                  بیت کوین چیست؟
                </h2>
                <div class="currency__bio--content text-aligned text-title mb-32" data-v-2aa63d2e="">
                  <p>بیت کوین اولین و مهم ترین رمزارز در بازار ارزهای دیجیتال است. قیمت بیت کوین بر قیمت همه ارزهای
                    دیجیتال تاثیر بسیار زیادی دارد.&nbsp;</p>
                  <p>بیت‌کوین یک رمزارز یا ارز دیجیتال و در حقیقت یک سیستم پرداخت جهانی است که رفتاری مشابه با پول
                    بی‌پشتوانه دارد. به‌عنوان توضیحی ساده‌تر، بیت کوین یک دارایی دیجیتالی است که مبنایی صفر و یک داشته و
                    به‌صورت الکترونیکی تولید، ذخیره و منتقل می‌شود. حساب و کتاب تراکنش‌های بیت‌کوین در یک زنجیره
                    به‌هم‌پیوسته اطلاعاتی به نام بلاک‌چین یا زنجیره‌بلوک نگهداری شده و تراکنش‌های شبکه در هر بلاک توسط
                    ماینر‌ها لیست می‌شود. مهم‌ترین مسئله در مورد بیت‌کوین این است که این ارز دیجیتال محدودیت 21 میلیون
                    واحدی دارد! به بیانی ساده‌تر یعنی بعد از استخراج 21 میلیون سکه، دیگر امکان استخراج بیت‌کوین وجود
                    نداشته و به انتها می‌رسد. بیت کوین بسیاری از ویژگی‌های ارزهای فیزیکی را دارد، با این تفاوت که آنی و
                    بدون مرز بین افراد قابل جابجایی است. ارز دیجیتال بیت کوین در بستر اینترنت به کمک رایانه‌های پیشرفته
                    و با قدرت پردازش بسیار بالا، در نتیجه حل معادلات ریاضیاتی بسیار پیچیده استخراج می‌شود. برای مشاهده
                    قیمت لحظه ای بیت کوین می توانید از نمودار بالا استفاده کنید.&nbsp;</p>
                </div>
              </div>
              <div data-v-2aa63d2e="">
                <h2 class="text-aligned text-primary mb-16 fw-bold fs-19-sm fs-26-md" data-v-2aa63d2e="">
                  فروش و خرید بیت کوین در نوبیتکس
                </h2>
                <div class="currency__bio--content text-aligned text-title mb-32" data-v-2aa63d2e="">
                  <p><strong>1- ثبت‌نام &nbsp;و ایجاد حساب کاربری در نوبیتکس:</strong></p>
                  <p>در ابتدا برای ثبت‌نام اولیه شما تنها به یک آدرس ایمیل فعال نیاز خواهید داشت. توصیه می‌شود که برای
                    ثبت‌نام در نوبیتکس از رمز عبور غیرتکراری و قدرتمندی استفاده کنید تا امنیت اولیه حساب کاربری‌‌ شما
                    تضمین شود.</p>
                  <p><strong>2- تائید حساب کاربری:</strong></p>
                  <p>پس از انجام ثبت‌نام اولیه، برای خرید &nbsp;ارز دیجیتال بیت کوین باید مراحل احراز هویت را انجام
                    دهید. احراز هویت در نوبیتکس با توجه به کاربری مالی آن، با ثبت‌نام در شبکه‌های اجتماعی و یا
                    نرم‌افزارهای کاربردی روزمره متفاوت است و نیازمند ارائه اطلاعات هویتی درست و دقت و توجه بالا در ارسال
                    اطلاعات است. برای خرید بیت کوین یا رمز ارزهای دیگری همچون<a
                      href="https://nobitex.ir/bitcoin/">&nbsp;بیت کوین</a>، <a
                      href="https://nobitex.ir/uniswap/">یونی&nbsp;</a><a href="https://nobitex.ir/uniswap/">سواپ</a>،
                    <a href="https://nobitex.ir/dai/">دای&nbsp;</a>و <a href="https://nobitex.ir/chainlink/">چین
                      لینک</a>، آوه و دات … شما به احراز هویت نیاز خواهید داشت. بهترین کار ممکن این است که پیش از هر
                    اقدامی در مورد <a href="https://help.nobitex.ir/kb/registeration-and-kyc/">رویه احراز هویت
                      نوبیتکس&nbsp;</a> مطالعه کنید.
                  </p>
                  <p><strong>3- شارژ حساب ریالی یا رمزارز قابل تبدیل آن:</strong></p>
                  <p>شما می‌توانید به کمک این راهنما،<a
                      href="https://help.nobitex.ir/knowledgebase/how-to-deposit/">&nbsp;حساب کاربری خود را شارژ
                      کنید</a>. خرید ارز دیجیتال بیت کوین در نوبیتکس با پول نقد یا به عبارتی ریال در بازار اصلی و با تتر
                    در بازار حرفه‌ای، امکان‌پذیر است.&nbsp;</p>
                  <p><strong>4- خرید بیت کوین:</strong></p>
                  <p>خرید بیت کوین در نوبیتکس به‌صورت ارائه پیشنهاد خرید بیت کوین در این بازار همتا به همتا (P2P) انجام
                    می‌شود. در واقع در این بازار شما ارز دیجیتال مورد نظر خود را از کاربران فعال در پلتفرم نوبیتکس
                    خریداری می‌کنید. به همین دلیل تکمیل فرایند خرید شما به پذیرش معامله از سوی دیگر کاربران بستگی دارد.‌
                  </p>
                </div>
              </div>
              <div data-v-2aa63d2e="">
                <h2 class="text-aligned text-primary mb-16 fw-bold fs-19-sm fs-26-md" data-v-2aa63d2e="">
                  خرید بیت کوین
                </h2>
                <div class="currency__bio--content text-aligned text-title mb-32" data-v-2aa63d2e="">
                  <p>خرید بیت کوین در نوبیتکس به دو صورت سفارش سریع و محدود امکان‌پذیر است. در سفارش سریع، خرید و فروش
                    شما به‌صورت آنی با قیمت بازار صورت می‌گیرد اما در سفارش محدود شما می‌توانید مبلغ مورد نظر خود را
                    وارد کنید. در این روش، معامله پس از اینکه کاربری دیگر با این قیمت بیت کوین حاضر به خرید یا فروش بود؛
                    صورت می‌گیرد.</p>
                  <p>با توجه به تعداد میلیونی کاربران نوبیتکس، شاخص نقد شوندگی این صرافی بسیار بالاست و بنابراین عمده
                    خریدوفروش‌های ارزهای دیجیتال این صرافی در زمان بسیار کوتاهی انجام می‌شود. همچنین شکاف قیمتی بزرگی
                    میان صرافی نوبیتکس و دیگر صرافی‌های بزرگ دنیا وجود ندارد.</p>
                  <p>به‌منظور ایجاد یک سرمایه‌گذاری موفق در بازار نوبیتکس و خرید رمزارزهای مختلف از قبیل <a
                      href="https://nobitex.ir/tether/">خرید تتر</a> یا ارز دیجیتال بیت کوین، توصیه می‌کنیم که همواره به
                    چرخه‌های بازار توجه دقیق داشته باشید و هرگز بیش از توان مالی خود سرمایه‌گذاری نکنید.</p>
                </div>
              </div>
              <div data-v-2aa63d2e="">
                <h2 class="text-aligned text-primary mb-16 fw-bold fs-19-sm fs-26-md" data-v-2aa63d2e="">
                  فروش بیت کوین
                </h2>
                <div class="currency__bio--content text-aligned text-title mb-32" data-v-2aa63d2e="">
                  <p>برای فروش بیت کوین نیز دو گزینه سفارش سریع و محدود وجود دارد. در سفارش محدود شما قیمت بیت کوین مورد
                    نظر را تعیین می کنید اما در سفارش سریع سفارش بر اساس قیمت لحظه ای بیت کوین و با نوساناتی جزئی، صورت
                    می گیرد.&nbsp;</p>
                  <p>شما می توانید پیش از خرید بیت کوین یا هر ارز دیگر با مراجعه به صفحه <a
                      href="https://nobitex.ir/calculator/">ماشین حساب ارز دیجیتال</a> نسبت به محاسبه و تبدیل ارزهای
                    دیجیتال به یکدیگر اقدام کنید.&nbsp;</p>
                </div>
              </div>
              <div data-v-2aa63d2e="">
                <h2 class="text-aligned text-primary mb-16 fw-bold fs-19-sm fs-26-md" data-v-2aa63d2e="">
                  قیمت بیت کوین
                </h2>
                <div class="currency__bio--content text-aligned text-title mb-32" data-v-2aa63d2e="">
                  <p>قیمت بیت کوین یکی از مهم ترین ابزار برای تفسیر بازار ارزهای دیجیتال است. حتی تریدرهایی که در بیت
                    کوین سرمایه گذاری نکرده اند؛ برای بررسی جامع تر بازار قیمت لحظه ای بیت کوین را رصد می کنند. در طی
                    این سال ها قیمت بیت کوین فراز و فرودهای بسیاری را تجربه کرده و سرمایه گذاران گاهی دلسرد و گاهی هیجان
                    زده شده اند. شما می توانید برای مشاهده قیمت لحظه ای بیت کوین به نمودار بالا مراجعه کنید و یا با
                    تغییر تنظیمات نمودار روند قیمت بیت کوین در طول زمان را رصد کنید.&nbsp;</p> <span
                    style="color:#1F4D78 !important">نوبیتکس، مرجعی مطمئن برای خرید و فروش بیت کوین</span>
                  <p>نوبیتکس به عنوان مطمئن ترین صرافی خرید بیت کوین، امکان خرید بیت کوین با کمترین کارمزد را فراهم کرده
                    است. علاوه بر سایت، کاربران محترم می‌توانند از اپلیکیشن نوبیتکس به‌عنوان بهترین اپلیکیشن خرید و فروش
                    بیت کوین استفاده کنند. برای شروع خرید و فروش بیت کوین همین حالا می‌توانید سفارش خود را در صرافی
                    آنلاین نوبیتکس ثبت کنید.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
        <div v-else-if="activeTab === 1" class="currency-info w-100 mb-3 px-2 py-3">
          <VueTradingView :options="{
              width: 'auto',
              symbol: $route.query.currency+'USDT',
              style: 1,
              theme: 'light',
              locale: 'en',
              interval: 'D',
              hide_side_toolbar: false,
              allow_symbol_change: false
            }" class="" />
        </div>
        <div class="py-3 px-2" v-if="activeTab === 2">
          111
        </div>
      </div>

    </div>

  </section>
  <skelton-trade v-else></skelton-trade>
</template>

<script>
import Exchange from '~/components/widget/exchange.vue'
import VueTradingView from 'vue-trading-view';
import Tabbar from '~/components/widget/tabbar.vue';
import SkeltonTrade from '~/components/widget/skeltonTrade.vue';
export default {
  layout: 'dashboard',
  components: { Exchange, VueTradingView, Tabbar, SkeltonTrade },
  props: [],
  data() {
    return {
      haveQuery: false,
      width: 0,
      activeTab: 0,
    }    
  },
  mounted() {
    setTimeout(() => {
      if (document.querySelectorAll('.currency-info')[0])
        this.width = document.querySelectorAll('.currency-info')[0].offsetWidth
    },1)

    this.haveQuery = false
    if (!this.$route.query.currency) {
      this.$router.push('/dashboard')
    } else {
      this.haveQuery = true
    }
  },
  methods: {
    sendActiveTab(i) {
      this.activeTab = i
    }
  }
}
</script>