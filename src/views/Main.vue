<template>
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <!-- Product section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="filebox">
              <label for="ex_file">+</label>
              <input
                @change="upload"
                type="file"
                id="ex_file"
                accept="image/*"
              />
              {{ this.imageURL }}
              {{ this.image }}
              {{ this.image.name }}
              {{ this.image.size }}
              {{ this.image.type }}
            </div>
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src="https://bunny.jjalbot.com/2021/12/98EYf_Ze0/98EYf_Ze0.jpeg"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="small mb-1">welcome to my cozy space</div>
              <h1 class="display-5 fw-bolder">kim euna's B-log ღ</h1>
              <div class="fs-5 mb-5">
                <span
                  ><img
                    :src="require(`@/assets/images/${hrtCng}.svg`)"
                    @click="changeHrt"
                  />
                  . . .
                </span>
              </div>
              <p class="lead">
                안녕하세요. 반갑습니다 <br />
                직접 만든 저의 블로그입니다 ෆ⸒⸒ ⸜(˶'ᵕ'˶)⸝
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 쓸거면 쓰기
        <div class="d-flex">
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
            </button>
        </div>
        -->
      <!-- Related items section-->
      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">recent photos 📷</h2>
          <div style="padding: 10px"> </div>
          <div
            class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5">
              <div class="card h-100">
                <!-- Product image-->
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <!-- Product details-->
                <div class="card-body p-4">
                  <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Fancy Product</h5>
                    <!-- Product price-->
                    $40.00 - $80.00
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#"
                      >View options</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <!-- Sale badge-->
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  happy
                </div>
                <!-- Product image-->
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <!-- Product details-->
                <div class="card-body p-4">
                  <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Special Item</h5>
                    <!-- Product reviews-->
                    <div
                      class="d-flex justify-content-center small text-warning mb-2"
                    >
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"
                      >$20.00</span
                    >
                    $18.00
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <!-- Sale badge-->
                <div
                  class="badge bg-dark text-white position-absolute"
                  style="top: 0.5rem; right: 0.5rem"
                >
                  happy
                </div>
                <!-- Product image-->
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <!-- Product details-->
                <div class="card-body p-4">
                  <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Sale Item</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through"
                      >$50.00</span
                    >
                    $25.00
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <!-- Product image-->
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <!-- Product details-->
                <div class="card-body p-4">
                  <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Popular Item</h5>
                    <!-- Product reviews-->
                    <div
                      class="d-flex justify-content-center small text-warning mb-2"
                    >
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <!-- Product price-->
                    $40.00
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Footer-->
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </body>
  </html>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "Main",
  setup() {
    const state = reactive({
      imageURL: "",
      image: "",
      step: 0,
      hrtCng: "cloudy", //빈 하트
    });

    const upload = (e) => {
      let imageFile = e.target.files; //업로드 한 파일
      let url = URL.createObjectURL(imageFile[0]); //파일의 필요한 데이터만을 url 변수에 넣음
      let img = imageFile[0];
      state.image = img; //경로데이터 input
      state.imageURL = url; //경로데이터 input
      state.step++;
    };

    const changeHrt = () => {
      if (state.hrtCng == "cloudy") {
        state.hrtCng = "cloudy-fill";
      } else {
        state.hrtCng = "cloudy";
      }
    };

    return {
      ...toRefs(state),
      upload,
      changeHrt,
    };
  },
};
</script>

<style>
.filebox label {
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
}

.filebox input[type="file"] {
  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
