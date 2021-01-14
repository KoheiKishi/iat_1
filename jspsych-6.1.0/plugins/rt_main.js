var repo_site = "https://KoheiKishi.github.io/iat_1/";

var welcome_block = {
  type: 'html-keyboard-response',
  stimulus: '<br>実験にご参加くださり，ありがとうございます。' +
  '<br>この実験では，できるだけ速く，かつ正確に，' +
  '<br>画像と単語を2つのグループに分類する課題に取り組んでいただきます。' +
  '<br>スペースキーを押して，次に進んでください。',
  choices: ['space'],
  post_trial_gap: 1000
};

var category_block = {
  type: 'html-keyboard-response',
  stimulus: '<p>これから，いくつかのターゲット（単語と画像）を呈示します。' + 
  '<br>それらをEキーとIキーを使って，4つのグループに分類していただきます。' + 
  '<br>グループと，それぞれに属する単語と画像は，以下の通りです。<br><br>' +
  '<strong>良い</strong>:<br>' + '嬉しさ　愛情　平和　素晴らしい　楽しみな　輝かしい　笑い　幸せな<br><br>' +
  '<strong>悪い</strong>:<br>' + '苦悩　ひどい　恐ろしい　意地の悪い　邪悪な　すさまじい　失敗　害する<br><br>' +
  '<strong>同性愛</strong>:<br>' + "<img src='" + repo_site + "img/01_gay_symbol.jpg'></img>  " +
  "<img src='" + repo_site + "img/02_lesbian_symbol.jpg'></img>  " + "<img src='" + repo_site + "img/05_gay_doll.jpg'></img>  " +
  "<img src='" + repo_site + "img/06_lesbian_doll.jpg'></img>  " + '同性愛　同性愛者<br><br>' + 
  '<strong>異性愛</strong>:<br>' +
  "<img src='" + repo_site + "img/03_hetero_symbol.jpg'></img>  " + "<img src='" + repo_site + "img/04_hetero_symbol_mirror.jpg'></img>  " +
  "<img src='" + repo_site + "img/07_hetero_doll.jpg'></img>  " + "<img src='" + repo_site + "img/08_hetero_doll_mirror.jpg'></img>  " +
  '異性愛　異性愛者<br><br>' +
  "スペースキーを押して，次に進んでください。</p>",
  choices: ['space'],
  post_trial_gap: 1000
};

var instructions_block = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br><strong>同性愛</strong></p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p style='font-size:24pt'>I<br><br><strong>異性愛</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>練習<br><br><br><br>「同性愛」カテゴリーに属するターゲットが現れたら，左手の指で<strong>E</strong>キーを押してください。" +
  "<br>「異性愛」カテゴリーに属するターゲットが現れたら，右手の指で<strong>I</strong>キーを押してください。<br><br>" +
/*   "<br>ターゲットは一つずつ現れます。<br><br>" +  */
  "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" + 
  "できるだけ速く，かつ正確に回答してください。<br><br> " +
  "準備ができたら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
  choices: ['space'],
  post_trial_gap: 1000
};


var trial_block = {
  timeline: [
    {
      type: jsPsych.timelineVariable('type'),
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['同性愛'],
      right_category_label: ['異性愛'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "right"}    
  ],
  randomize_order: true,
  repetitions: 2
};

var instructions_block2 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br><strong>悪い</strong></p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p style='font-size:24pt'>I<br><br><strong>良い</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>練習<br><br><br><br>「悪い」カテゴリーに属するターゲットが現れたら，左手の指で<strong>E</strong>キーを押してください。" +
  "<br>「良い」カテゴリーに属するターゲットが現れたら，右手の指で<strong>I</strong>キーを押してください。<br><br>" + 
/*   "ターゲットは一つずつ現れます。<br><br>" + */
  "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" + 
  "できるだけ速く，かつ正確に回答してください。<br><br> " +
  "準備ができたら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
  choices: ['space'],
  post_trial_gap: 1000
};

var trial_block2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['悪い'],
      right_category_label: ['良い'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {stimulus: "苦悩", stim_key_association: "left"},
    {stimulus: "ひどい", stim_key_association: "left"},
    {stimulus: "恐ろしい", stim_key_association: "left"},
    {stimulus: "意地の悪い", stim_key_association: "left"},
    {stimulus: "邪悪な", stim_key_association: "left"},
    {stimulus: "すさまじい", stim_key_association: "left"},
    {stimulus: "失敗", stim_key_association: "left"},
    {stimulus: "害する", stim_key_association: "left"},
    {stimulus: "嬉しさ", stim_key_association: "right"},
    {stimulus: "愛情", stim_key_association: "right"},
    {stimulus: "平和", stim_key_association: "right"},
    {stimulus: "素晴らしい", stim_key_association: "right"},
    {stimulus: "楽しみな", stim_key_association: "right"},
    {stimulus: "輝かしい", stim_key_association: "right"},
    {stimulus: "笑い", stim_key_association: "right"},
    {stimulus: "幸せな", stim_key_association: "right"}
  ],
  randomize_order: true,
  repetitions: 2
};

var instructions_block3_1 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" +
  "<strong>悪い</strong><br><br>" + "<strong>同性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
  "<p style='font-size:24pt'>I<br><br>" + "<strong>良い</strong><br><br>" + "<strong>異性愛</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>練習<br><br><br><br><br><br><br>「悪い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>" +
  "キーを押してください。<br>" + "「良い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br><br>" +
  "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" +
  "できるだけ速く，かつ正確に回答してください。<br><br> " +
  "準備が出来たら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
  choices: ['space'],
  post_trial_gap: 1000
};

var trial_block3_1 = {
  timeline: [
    {
      type: jsPsych.timelineVariable('type'),
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['悪い', '同性愛'],
      right_category_label: ['良い', '異性愛'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
  ],
  randomize_order: true,
  repetitions: 1
};

/* var instructions_block3_2 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" +
  "<strong>悪い</strong><br><br>" + "<strong>同性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
  "<p style='font-size:24pt'>I<br><br>" + "<strong>良い</strong><br><br>" + "<strong>異性愛</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>直前と同じ配置です。<br><br><br>" + 
  "ただしこの試行では，<strong>反対のキーを押してしまっても，訂正する必要はありません</strong>。<br>" +
  "間違えても気にせず，次のターゲットに移ってください。<br>" + 
  "「悪い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>キーを押してください。<br>" +
  "「良い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br>" +
  "すべてのターゲットは，どれか一つのカテゴリーに属します。<br><br>" +
  "できるだけ速く，かつ正確に回答してください。<br><br> " +
  "準備が出来たら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
  choices: ['space'],
  post_trial_gap: 1000
};

var trial_block3_2 = {
  timeline: [
    {
      type: jsPsych.timelineVariable('type'),
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span> </span>',
      bottom_instructions: '<p> </p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['悪い', '同性愛'],
      right_category_label: ['良い', '異性愛'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
  ],
  randomize_order: true,
  repetitions: 1
};
 */
var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" +
  "<strong>悪い</strong><br><br>" + "<strong>同性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
  "<p style='font-size:24pt'>I<br><br>" + "<strong>良い</strong><br><br>" + "<strong>異性愛</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>本番</strong><br>直前と同じ配置です。<br><br><br><br><br><br>" + 
  "「悪い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>キーを押してください。<br>" +
  "「良い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br><br>" +
  "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" + 
  "できるだけ速く，かつ正確に回答してください。<br><br> " +
  "準備が出来たら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
  choices: ['space'],
  post_trial_gap: 1000
};

var trial_block4 = {
  timeline: [
      {
        type: jsPsych.timelineVariable('type'),
        is_html: jsPsych.timelineVariable('is_html'),
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['悪い', '同性愛'],
        right_category_label: ['良い', '異性愛'],
        response_ends_trial: true,
        data: { iat_type: 'bad-homo' }
      }
    ],
    timeline_variables: [
      {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "同性愛", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "異性愛", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
    ],
    randomize_order: true,
    repetitions: 2
  };

  var instructions_block5 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" + "<strong>異性愛</strong></div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p style='font-size:24pt'>I<br><br>" + "<strong>同性愛</strong></p></div>" +
    "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>練習<br>これまでと配置が逆になっています。<br><br><br><br><br><br>" + 
    "「異性愛」カテゴリーに属するターゲットが現れたら，左手の指で<strong>E</strong>キーを押してください。<br>" +
    "「同性愛」カテゴリーに属するターゲットが現れたら，右手の指で<strong>I</strong>キーを押してください。<br><br>" +
    "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" + 
    "できるだけ速く，かつ正確に回答してください。<br><br> " +
    "準備ができたら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
    choices: ['space'],
    post_trial_gap: 1000
  };

var trial_block5 = { 
    timeline: [
      {
        type: jsPsych.timelineVariable('type'),
        is_html: jsPsych.timelineVariable('is_html'),
        stimulus: jsPsych.timelineVariable('stimulus'),
        stim_key_association: jsPsych.timelineVariable('stim_key_association'),
        html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
        bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
        force_correct_key_press: true,
        display_feedback: true,
        trial_duration: 3000, //Only if display_feedback is false
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['異性愛'],
        right_category_label: ['同性愛'],
        response_ends_trial: true,
        data: { iat_type: 'practice' }
      }
    ],
    timeline_variables: [
      {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "left"}
    ],
    randomize_order: true,
    repetitions: 2
  };

  var instructions_block6_1 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" + 
    "<strong>悪い</strong><br><br>" + "<strong>異性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" + 
    "<p style='font-size:24pt'>I<br><br>" + "<strong>良い</strong><br><br>" + "<strong>同性愛</strong></p></div>" +
    "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>練習<br><br><br><br><br><br><br>「悪い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>" +
    "キーを押してください。<br>" + "「良い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br><br>" +
    "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" +
    "できるだけ速く，かつ正確に回答してください。<br><br> " +
    "準備が出来たら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
    choices: ['space'],
    post_trial_gap: 1000
  };

  var trial_block6_1 = {
    timeline: [
    {
      type: jsPsych.timelineVariable('type'),
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['悪い', '異性愛'],
      right_category_label: ['良い', '同性愛'],
      response_ends_trial: true,
      data: {iat_type: 'practice'}
    }
    ],
    timeline_variables: [
      {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
    ],
    randomize_order: true,
    repetitions: 2
  };
/* 
  var instructions_block6_2 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br>" + 
    "<strong>悪い</strong><br>" + "<strong>異性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" + 
    "<p style='font-size:24pt'>I<br>" + "<strong>良い</strong><br>" + "<strong>同性愛</strong></p></div>" +
    "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'>直前と同じ配置です。<br><br><br>" + 
    "ただしこの試行では，<strong>反対のキーを押してしまっても，訂正する必要はありません</strong>。<br>" +
    "間違えても気にせず，次のターゲットに移ってください。<br>" + 
    "「悪い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>キーを押してください。<br>" +
    "「良い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br>" +
    "すべてのターゲットは，どれか一つのカテゴリーに属します。<br><br>" +
    "できるだけ速く，かつ正確に回答してください。<br><br> " +
    "準備が出来たら，キーを押して始めてください（1秒後に開始します）。</div>",
    choices: ['space'],
    post_trial_gap: 1000
  };

  var trial_block6_2 = {
    timeline: [
    {
      type: jsPsych.timelineVariable('type'),
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span> </span>',
      bottom_instructions: '<p> </p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['悪い', '異性愛'],
      right_category_label: ['良い', '同性愛'],
      response_ends_trial: true,
      data: {iat_type: 'practice'}
    }
    ],
    timeline_variables: [
      {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "right"},
      {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "left"},
      {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
    ],
    randomize_order: true,
    repetitions: 1
  };
 */
  var instructions_block7 = {
    type: 'html-keyboard-response',
    stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p style='font-size:24pt'>E<br><br>" + 
    "<strong>悪い</strong><br><br>" + "<strong>異性愛</strong></p></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" + 
    "<p style='font-size:24pt'>I<br><br>" + "<strong>良い</strong><br><br>" + "<strong>同性愛</strong></p></div>" +
    "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>本番</strong><br>直前と同じ配置です。<br><br><br><br><br>" + 
    "「悪い」または「異性愛」カテゴリーに属するターゲットが現れたら，<strong>E</strong>キーを押してください。<br>" +
    "「良い」または「同性愛」カテゴリーに属するターゲットが現れたら，<strong>I</strong>キーを押してください。<br><br>" +
    "間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。<br>" + 
    "できるだけ速く，かつ正確に回答してください。<br><br> " +
    "準備が出来たら，スペースキーを押して始めてください（1秒後に開始します）。</div>",
    choices: ['space'],
    post_trial_gap: 1000
  };

var trial_block7 = {
  timeline: [
  {
    type: jsPsych.timelineVariable('type'),
    is_html: jsPsych.timelineVariable('is_html'),
    stimulus: jsPsych.timelineVariable('stimulus'),
    stim_key_association: jsPsych.timelineVariable('stim_key_association'),
    html_when_wrong: '<span style="color: red; font-size: 80px">Ｘ</span>',
      bottom_instructions: '<p>間違えると赤いＸが現れます。反対のキーを押して，次に進んでください。</p>',
    force_correct_key_press: true,
    display_feedback: true,
    trial_duration: 3000, //Only if display_feedback is false
    left_category_key: 'E',
    right_category_key: 'I',
    left_category_label: ['悪い', '異性愛'],
    right_category_label: ['良い', '同性愛'],
    response_ends_trial: true,
    data: {iat_type: 'bad-het'}
  }
  ],
  timeline_variables: [
    {type: 'iat-image', stimulus: repo_site + "img/01_gay_symbol.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/02_lesbian_symbol.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/05_gay_doll.jpg", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/06_lesbian_doll.jpg", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "同性愛", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "同性愛者", stim_key_association: "right"},
    {type: 'iat-image', stimulus: repo_site + "img/03_hetero_symbol.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/04_hetero_symbol_mirror.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/07_hetero_doll.jpg", stim_key_association: "left"},
    {type: 'iat-image', stimulus: repo_site + "img/08_hetero_doll_mirror.jpg", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "異性愛", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "異性愛者", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "苦悩", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "ひどい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "恐ろしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "意地の悪い", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "邪悪な", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "すさまじい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "失敗", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "害する", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "嬉しさ", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "愛情", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "平和", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "楽しみな", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "輝かしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "笑い", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "幸せな", stim_key_association: "right"}
  ],
  randomize_order: true,
  repetitions: 2
};

var debrief_block = {
  type: "html-keyboard-response",
  stimulus: function() {
    /*       // calculate D-score from https://faculty.washington.edu/agg/pdf/GB&N.JPSP.2003.pdf
      // first find mean RT
      var bad_homo = jsPsych.data.get().filter({iat_type: 'bad-homo'}).filterCustom(function(x) { return x.rt < 10000 });
      var mean_correct_responses_bad_homo = bad_homo.filter({correct: true}).select('rt').mean();
      var bad_het = jsPsych.data.get().filter({iat_type: 'bad-het'}).filterCustom(function(x) { return x.rt < 10000 });
      var mean_correct_responses_bad_het = bad_het.filter({correct: true}).select('rt').mean();

      // get overall sd
      var sd = bad_homo.join(bad_het).filter({correct: true}).select('rt').sd();

      var d = (mean_correct_responses_bad_het - mean_correct_responses_bad_homo) / sd;
 */
    return "<p>お疲れさまでした。以上で実験は終了です。</p>" +
    "<p>ご協力くださり，本当にありがとうございました。</p>" +
    "<p>本実験では，潜在連合テスト（Greenwald et al., 1998）と呼ばれる課題に取り組んでいただきました。</p>" +
    "<p>異性愛者を基準とした，同性愛者に対する無意識の態度の偏りを測定できると考えられています。</p>" +
    "<p>本実験による測定結果をお知りになりたい場合は，実験実施者にその旨お伝えください。</p>" +
    "<p>ご希望の場合，研究終了後（最も早くて2021年3月中，遅くとも2022年3月まで），結果をお知らせいたします。</p>"
/*         return "<p>お疲れさまでした。以上で実験は終了です。以下は実験結果の概要です。</p>"+
        "<p>「悪い・異性愛」と「良い・同性愛」の組み合わせにおいて，正答までに平均<strong>"+Math.floor(mean_correct_responses_bad_young)+"ミリ秒</strong>かかりました。</p>"+
        "<p>「悪い・同性愛」と「良い・異性愛」の組み合わせにおいて，正答までに平均<strong>"+Math.floor(mean_correct_responses_bad_old)+"ミリ秒</strong>かかりました。</p>"+
        "<p>Dスコア（2つの反応時間の差と，全体的な反応時間のブレを考慮した潜在的なバイアスを示す指標）は<strong>"+d.toFixed(2)+"</strong>でした。</p>"+
        "<p>参考までに，Project Implicitと呼ばれるIATが体験できるウェブサイトでは，0.15以上は弱いバイアス，0.35以上は中程度のバイアス，0.65以上は強いバイアスとされています。</p>"
        "<p>今回の場合，負の値は同性愛者に対する選好，正の値は異性愛者に対する選好を示します。</p>"
 */
  }
};

var timeline = [];

timeline.push(welcome_block);
timeline.push(category_block);
timeline.push(instructions_block);
timeline.push(trial_block);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3_1);
timeline.push(trial_block3_1);
/* timeline.push(instructions_block3_2);
timeline.push(trial_block3_2); */
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(instructions_block5);
timeline.push(trial_block5);
timeline.push(instructions_block6_1);
timeline.push(trial_block6_1);
/* timeline.push(instructions_block6_2);
timeline.push(trial_block6_2); */
timeline.push(instructions_block7);
timeline.push(trial_block7);
/* timeline.push(debrief_block); */
