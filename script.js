

const langBtn = document.getElementById('lang-btn');
const slefIntro = document.getElementById('self-intro');
const selfIntroContent = document.getElementById('self-intro-content');

const workexp = document.getElementById('work-exp');
const workexp1sub = document.getElementById('work-exp1-sub');
const workexp1Content = document.getElementById('work-exp1-content');

const project = document.getElementById('project');
const duty = document.getElementsByName('duty');
const language = document.getElementsByName('language');
const cowriter = document.getElementsByName('cowriter');
const project1Title = document.getElementById('project1-title');
const project1Content = document.getElementById('project1-content');
const project1duty = document.getElementById('project1-duty');
const project2Title = document.getElementById('project2-title');
const project2Content = document.getElementById('project2-content');
const project2duty = document.getElementById('project2-duty');
const project3Title = document.getElementById('project3-title');
const project3Content = document.getElementById('project3-content');
const project3duty = document.getElementById('project3-duty');

const certificate = document.getElementById('certificate');
const skill = document.getElementById('skill');
const programLang = document.getElementById('program-lang');
const tools = document.getElementById('tools');
const database = document.getElementById('database');
const other = document.getElementById('other');
const study = document.getElementById('study');

const study1Title = document.getElementById('study1-title');
const study1sub = document.getElementById('study1-sub');
const study1Content = document.getElementById('study1-content');
const study2Title = document.getElementById('study2-title');
const study2sub = document.getElementById('study2-sub');
const study2Content = document.getElementById('study2-content');

langBtn.addEventListener('click', () => {
    if (langBtn.innerText === "中文") {
        langBtn.innerText = "日本語";
        slefIntro.innerText = "自我介紹";
        selfIntroContent.innerHTML = "<p>喜歡打遊戲，看動畫，對資料、資訊、網路有興趣。<\p><p>夢想是把所有的動畫遊戲統合在一個平台上，匯聚所有的資料，讓我不用每個網站每個平台找我要玩的遊戲，看的動畫。<\p>"
        workexp.innerText = "工作經歷";
        workexp1sub.innerText = "2022 ~ 至今 工程師, 新潟県長岡市";
        workexp1Content.innerText = "主要生產紫外線曝光機，設備供應商。主要開發裝置整體流程控制軟體、各硬體相互溝通之間的協同。"
        project.innerText = "專案";
        duty.forEach(ele => {
            ele.innerText = "主要負責："
        });
        language.forEach(ele => {
            ele.innerText = "語言："
        });
        cowriter.forEach(ele => {
            ele.innerText = "共同作者："
        });
        project1Title.innerText = "剪輯遊戲直播影片";
        project1Content.innerText = "透過 Twitch 直播時的聊天室留言數量判斷片段(segment)好壞，讓 CNN 網路學習然後評分片段。";
        project1duty.innerText = "系統架構、部分爬蟲、深度學習。";
        project2Title.innerText = "課程難度查詢";
        project2Content.innerText = "提供台科課程授課難度與通過比率資訊，可以在選課前查詢，避免選到太多太硬的課程。";
        project2duty.innerText = "後端伺服器、資料庫。";
        project3Title.innerText = "網頁影音分享平台";
        project3Content.innerText = "取代原本廣告商與創作者合作的方式，利用 coinHive 讓創作者的觀眾直接支付加密貨幣。";
        project3duty.innerText = "後端伺服器、資料庫。";
        certificate.innerText = "證書";
        skill.innerText = "技能";
        programLang.innerText = "程式語言";
        tools.innerText = "工具";
        database.innerText = "資料庫";
        other.innerText = "其他";
        study.innerText = "學歷";
        study1Title.innerText = "台灣科技大學 Taiwan Tech";
        study1sub.innerText = "2016 ~ 2020.畢";
        study1Content.innerText = "資訊管理學士";
        study2Title.innerText = "北科大附屬桃農";
        study2sub.innerText = "2013 ~ 2016.畢";
        study2Content.innerText = "電子系 EE";

    } else {
        langBtn.innerText = "中文";
        slefIntro.innerText = "自己紹介";
        selfIntroContent.innerHTML = "<p>ソフトウェア大好きなエンジニア。<\p><p>ゲームとアニメが好きで、データ、情報、ネットワークに興味がある。<\p><p>夢は全てのゲームとアニメを一つのプラットフォームに集めて、全てのデータを集めて、全ての情報を集めて、全ての人に提供すること。<\p>"
        workexp.innerText = "職務経歴";
        workexp1sub.innerText = "2022 ~ 現在 エンジニア, 新潟県長岡市";
        workexp1Content.innerText = "主に紫外線露光装置を生産する、設備サプライヤー。主に装置全体の流れ制御ソフトウェア、各ハードウェア間の相互通信の協調を開発。"
        project.innerText = "セルフプロジェクト";
        duty.forEach(ele => {
            ele.innerText = "主な内容："
        });
        language.forEach(ele => {
            ele.innerText = "言語："
        });
        cowriter.forEach(ele => {
            ele.innerText = "共同作者："
        });
        project1Title.innerText = "ゲームのライブ配信動画を編集する";
        project1Content.innerText = "Twitchのライブ配信のチャットメッセージの数を判断して、セグメントの良し悪しをCNNネットワークに学習させて、セグメントを評価する。";
        project1duty.innerText = "システムアーキテクチャ、一部のクローラー、深層学習。";
        project2Title.innerText = "科目の難易度を調べる";
        project2Content.innerText = "台科(TaiwanTech)の科目の授業の難易度と合格率の情報を提供して、選課前に調べて、難しい科目を避ける。";
        project2duty.innerText = "バックエンドサーバー、データベース。";
        project3Title.innerText = "ウェブの動画共有プラットフォーム";
        project3Content.innerText = "元の広告主とクリエイターの協力方式を取って、coinHiveを利用して、クリエイターの視聴者に直接暗号通貨を支払う。";
        project3duty.innerText = "バックエンドサーバー、データベース。";
        certificate.innerText = "資格";
        skill.innerText = "スキル";
        programLang.innerText = "プログラミング言語";
        tools.innerText = "ツール";
        database.innerText = "データベース";
        other.innerText = "その他";
        study.innerText = "学歴";
        study1Title.innerText = "台湾科技大学 Taiwan Tech";
        study1sub.innerText = "2016 ~ 2020.卒";
        study1Content.innerText = "情報管理学士";
        study2Title.innerText = "北科大附属桃農";
        study2sub.innerText = "2013 ~ 2016.卒";
        study2Content.innerText = "電子系 EE";

    }



});