

<template>
  <div class="bg-gray-50">
    <div class="w-full lg:relative">
      <div class="lg:grid lg:grid-cols-12">

        <div class="lg:fixed lg:w-1/4 lg:h-screen">
          <div
            class="bg-gradient-to-b from-blue-50 bg-blue-200 rounded-xl mx-4 mt-36 px-3 text-center text-gray-900 lg:m-auto lg:w-full lg:h-full lg:rounded-l-none lg:rounded-r-3xl lg:flex lg:flex-col">

            <div class="mx-auto">
              <img class="inline-block origin-center w-36 -mt-28 rounded-full ring-4 ring-indigo-200 shadow-lg lg:mt-16"
                src="/assets/profile.jpg" alt="">
            </div>
            <p class="mt-3 text-3xl font-bold">Titor</p>
            <p class="text-xs font-bold text-gray-400">1997</p>
            <p class="text-xs font-bold text-gray-400">Middleware Engineer🔰</p>
            <div class="mt-5 grid grid-cols-5 gap-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="grid-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd" />
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <p class="grid-text">{{ $t('jobName') }}<br> {{ $t('jobName_en') }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="grid-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <p id="school-name" class="grid-text">{{ $t('collageName') }}<br> {{ $t('collageDegree') }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="grid-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <p class="grid-text">日本<br> 新潟県長岡市</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="grid-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p class="grid-text">+81-70-8961-8020<br>
                <a class="underline text-blue-500" href="mailto:gj94gj94ao4@gmail.com">gj94gj94ao4@gmail.com</a>
              </p>

            </div>
            <div class="social flex justify-center mt-4 space-x-5">
              <a href="https://github.com/gj94gj94ao4">
                <img class="w-8 h-8 m-0.5" src="/assets/icons/GitHub-Mark-64px.png" alt="github">
              </a>
              <a href="https://t.me/gj94gj94ao4" target="_blank">
                <img class="w-8 h-8 m-0.5" src="/assets/icons/icons8-telegram-app-48.png" alt="telegram">
              </a>
            </div>
            <div class="mt-4">
              <button id="btn" @click="changelocale" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                日本語
              </button>
            </div>
            <p class="text-xs text-right mt-1 lg:justify-self-end">update by. 2023.05.26</p>
          </div>
        </div>
        <div class="lg:col-span-3"></div>
        <div class="w-full px-4 text-gray-900 sm:flex sm:flex-row sm:flex-wrap lg:col-span-9">

          <div class="sm:w-full">
            <h2 id="self-intro" class="intro-head">{{ $t('selfIntro') }}</h2>
            <div id="self-intro-content" class="intro-inner space-y-1">

              <p>{{ $t('selfIntroContent1') }}</p>
              <p>{{ $t('selfIntroContent2') }}</p>
            </div>
          </div>

          <div class="sm:w-3/6">
            <h2 id="work-exp" class="intro-head">{{ $t('workExp') }}</h2>
            <div class="intro-inner space-y-3">
              <div class="grid grid-cols-10 gap-2">
                <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                <div class="col-span-9 flex flex-col font-semibold">
                  <h3 class="text-lg">{{ $t('work1Title') }}</h3>
                  <p id="work-exp1-sub" class="text-xs text-blue-500">{{ $t('work1Sub') }}</p>
                </div>
                <div class="mx-auto border-4 border-blue-200 w-1"></div>
                <div class="col-span-9">
                  <p id="work-exp1-content">{{ $t('work1Content') }}</p>
                </div>
              </div>
            </div>

            <h2 id="project" class="intro-head">{{ $t('projectExp') }}</h2>
            <div class="intro-inner">
              <div class="space-y-3">
                <div class="grid grid-cols-10 gap-2">
                  <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div class="col-span-9 flex">
                    <div class="flex flex-col items-end font-semibold">
                      <h3 class="inline-block text-lg">VeXtract</h3>
                      <p class="inline-block text-blue-500 text-xs">2019</p>
                    </div>
                    <div id="project1-title" class="my-auto ml-2 text-gray-500">{{ $t('project1Title') }}</div>
                  </div>

                  <div class="mx-auto border-4 border-blue-200 w-1"></div>
                  <div class="col-span-9">
                    <p id="project1-content">{{ $t('project1Content') }}</p>
                    <div class="grid grid-cols-10 text-sm gap-y-2 mt-1">
                      <p name="duty" class="col-span-3 my-auto text-right">{{ $t('responsibility') }}</p>
                      <p id="project1-duty" class="col-span-7">{{ $t('project1Responsibility') }}</p>

                      <p name="language" class="col-span-3 my-auto text-right">{{$t('language')}}</p>
                      <p class="col-span-7">python</p>
                      <p name="cowriter" class="col-span-3 my-auto text-right">{{ $t('cowriter') }}</p>
                      <div class="col-span-7 space-x-2 cowriter">
                        <a href="https://sheiun.me/">sheiun</a>
                        <a href="https://gitlab.com/John0329">RainingNight</a>
                        <a href="https://gitlab.com/MingHuangZheng">MingHuang</a>
                        <a href="https://gitlab.com/CJJiang">CJ_Jiang</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-10 gap-2">
                  <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div class="col-span-9 flex">
                    <div class="flex flex-col items-end font-semibold">
                      <h3 class="inline-block text-lg">NTUST_MINER</h3>
                      <p class="inline-block text-blue-500 text-xs">2019</p>
                    </div>
                    <div id="project2-title" class="my-auto ml-2 text-gray-500">{{ $t('projcet2Title') }}</div>
                  </div>

                  <div class="mx-auto border-4 border-blue-200 w-1"></div>
                  <div class="col-span-9">
                    <p id="project2-content">{{ $t('project2Content') }}</p>
                    <div class="grid grid-cols-10 text-sm gap-y-2 mt-1">
                      <p name="duty" class="col-span-3 my-auto text-right">{{ $t('responsibility') }}</p>
                      <p id="project2-duty" class="col-span-7">{{ $t('project2Responsibility') }}</p>

                      <p name="language" class="col-span-3 my-auto text-right">{{$t('language')}}</p>
                      <p class="col-span-7">java python spring javascript vue</p>
                      <p name="cowriter" class="col-span-3 my-auto text-right">{{ $t('cowriter') }}</p>
                      <div class="col-span-7 space-x-2 cowriter">
                        <a href="https://sheiun.me/">sheiun</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-10 gap-2">
                  <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div class="col-span-9 flex">
                    <div class="flex flex-col items-end font-semibold">
                      <h3 class="inline-block text-lg">Course_Project</h3>
                      <p class="inline-block text-blue-500 text-xs">2018</p>
                    </div>
                    <div id="project3-title" class="my-auto ml-2 text-gray-500">{{$t('Project3Titile')}}</div>
                  </div>
                  <div class="mx-auto border-4 border-blue-200 w-1"></div>
                  <div class="col-span-9">
                    <p id="project3-content">{{ $t('project3Content') }}</p>
                    <div class="grid grid-cols-10 text-sm gap-y-2 mt-1">
                      <p name="duty" class="col-span-3 my-auto text-right">{{ $t('responsibility') }}</p>
                      <p id="project3-duty" class="col-span-7">{{$t('project3Responsibility')}}</p>

                      <p name="language" class="col-span-3 my-auto text-right">{{$t('language')}}</p>
                      <p class="col-span-7">Python Django</p>
                      <p name="cowriter" class="col-span-3 my-auto text-right">{{ $t('cowriter') }}</p>
                      <div class="col-span-7 space-x-2 cowriter">
                        <a href="https://github.com/yuchingtw">YuChing Chen</a>
                        <a href="https://gitlab.com/John0329">RainingNight</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm:w-3/6">
            <h2 id="certificate" class="intro-head">{{ $t('cirtificate') }}</h2>
            <div class="intro-inner space-y-2">
              <div class="grid grid-cols-10">
                <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                <div class="col-span-9 ">
                  <div class="flex flex-col font-semibold">
                    <h3 class="text-lg">JLPT N1</h3>
                    <p class="text-xs text-blue-500">2018</p>
                  </div>
                  <p class="text-xs text-gray-500">国際交流基金 N1A027944T</p>
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                <div class="col-span-9 ">
                  <div class="flex flex-col font-semibold">
                    <h3 class="text-lg">TOEIC 745</h3>
                    <p class="text-xs text-blue-500">2019</p>
                  </div>
                  <p class="text-xs text-gray-500">Educational Testing Service (ETS)</p>
                </div>
              </div>
            </div>


            <h2 id="skill" class="intro-head">{{ $t('skill') }}</h2>
            <div class="intro-inner space-y-2">
              <div class="grid grid-cols-10">
                <div class="m-auto h-2 w-2 bg-blue-400 rounded-full"></div>
                <div id="program-lang" class="col-span-9 font-semibold">{{ $t('programLanguage') }}</div>
                <div class="col-start-2 col-span-9 pl-4">
                  <ul class="list-disc disc-blue-400">
                    <li>Python</li>
                    <li>Java</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="m-auto h-2 w-2 bg-blue-400 rounded-full"></div>
                <div id="tools" class="col-span-9 font-semibold">{{$t('tools')}}</div>
                <div class="col-start-2 col-span-9 pl-4">
                  <ul class="list-disc disc-blue-400">
                    <li>git</li>
                    <li>google workspace</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="m-auto h-2 w-2 bg-blue-400 rounded-full"></div>
                <div id="database" class="col-span-9 font-semibold">{{ $t('database') }}</div>
                <div class="col-start-2 col-span-9 pl-4">
                  <ul class="list-disc disc-blue-400">
                    <li>sqlite</li>
                    <li>mariadb</li>
                    <li>mongodb</li>
                  </ul>
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="m-auto h-2 w-2 bg-blue-400 rounded-full"></div>
                <div id="other" class="col-span-9 font-semibold">{{ $t('other') }}</div>
                <div class="col-start-2 col-span-9 pl-4">
                  <ul class="list-disc disc-blue-400">
                    <li>vue</li>
                    <li>docker</li>
                    <li>CI/CD</li>
                    <li>Design Patterns</li>
                  </ul>
                </div>
              </div>
            </div>


            <h2 id="study" class="intro-head">{{$t('schoolExp')}}</h2>
            <div class="intro-inner space-y-3">
              <div class="grid grid-cols-10">
                <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                <div class="col-span-9 flex flex-col font-semibold">
                  <h3 id="study1-title" class="text-lg">{{ $t('school1Title') }}</h3>
                </div>
                <div class="mx-auto border-4 border-blue-200 w-1 mt-3"></div>
                <div class="col-span-9">
                  <p id="study1-sub" class="text-xs text-blue-500">{{ $t('school1Sub') }}</p>
                  <p id="study1-content">{{ $t('school1Content') }}</p>
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="m-auto h-3 w-3 bg-blue-400 rounded-full"></div>
                <div class="col-span-9 flex flex-col font-semibold">
                  <h3 id="sutdy2-title" class="text-lg">{{ $t('school2Title') }}</h3>
                </div>
                <div></div>
                <div class="col-span-9">
                  <p id="study2-sub" class="text-xs text-blue-500">{{ $t('school2Sub') }}</p>
                  <p id="study2-content">{{ $t('school2Content') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-10">
        <div class="lg:col-span-3"></div>
        <div class="px-4 pt-4 text-center text-xs text-gray-500 sm:col-span-2 sm:px-16 lg:col-span-7">
          <p class="border-t-2 p-1">Copyright © 2021 Titor. Not All rights reserved.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  methods: {
    changelocale() {
      this.$i18n.locale = this.$i18n.locale == "ja" ? "zh-TW" : "ja";
      document.getElementById('btn').innerText = this.$i18n.locale == "ja" ? "中文" : "日本語";
    }
  }
}

</script>




    

