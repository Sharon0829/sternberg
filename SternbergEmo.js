/********************* 
 * Sternbergemo *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SternbergEmo';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// --- Variable declarations (added manually; the export omitted these, causing
// "Can't find variable" ReferenceErrors in strict ES-module mode) ---
let currentLoop, frameDur, practice_loop, formal_a_loop, formal_b_loop, level;
let globalClock, routineTimer;
let consentClock, consent_text, consent_key;
let subjectClock, subject_text, subject_key;
let instructionsClock, instr_text, instr_key;
let trialClock, fixation, memSetStim, img, probeStim, key_resp;
let feedbackClock, fb_text;
let itiClock, iti_blank;
let restClock, break_text;
let endClock, end_text, end_key;
let t, frameN, frameRemains, continueRoutine, routineForceEnded;
let consentMaxDuration, consentMaxDurationReached, consentComponents, _consent_key_allKeys;
let subjectMaxDuration, subjectMaxDurationReached, subjectComponents, _subject_key_allKeys;
let instructionsMaxDuration, instructionsMaxDurationReached, instructionsComponents, _instr_key_allKeys;
let trialMaxDuration, trialMaxDurationReached, trialComponents, _key_resp_allKeys;
let feedbackMaxDuration, feedbackMaxDurationReached, feedbackComponents;
let itiMaxDuration, itiMaxDurationReached, itiComponents;
let restMaxDuration, restMaxDurationReached, restComponents;
let endMaxDuration, endMaxDurationReached, endComponents, _end_key_allKeys;

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(subjectRoutineBegin());
flowScheduler.add(subjectRoutineEachFrame());
flowScheduler.add(subjectRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);




const formal_a_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(formal_a_loopLoopBegin(formal_a_loopLoopScheduler));
flowScheduler.add(formal_a_loopLoopScheduler);
flowScheduler.add(formal_a_loopLoopEnd);



flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
const formal_b_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(formal_b_loopLoopBegin(formal_b_loopLoopScheduler));
flowScheduler.add(formal_b_loopLoopScheduler);
flowScheduler.add(formal_b_loopLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'neg/Fire_6.jpg', 'path': 'neg/Fire_6.jpg'},
    {'name': 'neu/Snow_5.jpg', 'path': 'neu/Snow_5.jpg'},
    {'name': 'pos/Fireworks_2.jpg', 'path': 'pos/Fireworks_2.jpg'},
    {'name': 'blank.png', 'path': 'blank.png'},
    {'name': 'neg/Destruction_8.jpg', 'path': 'neg/Destruction_8.jpg'},
    {'name': 'neu/Bar_2.jpg', 'path': 'neu/Bar_2.jpg'},
    {'name': 'pos/Beach_6.jpg', 'path': 'pos/Beach_6.jpg'},
    {'name': 'neg/Fire_5.jpg', 'path': 'neg/Fire_5.jpg'},
    {'name': 'neu/Wedding_12.jpg', 'path': 'neu/Wedding_12.jpg'},
    {'name': 'pos/Lake_8.jpg', 'path': 'pos/Lake_8.jpg'},
    {'name': 'formal_a.csv', 'path': 'formal_a.csv'},
    {'name': 'neg/Explosion_6.jpg', 'path': 'neg/Explosion_6.jpg'},
    {'name': 'pos/Fireworks_7.jpg', 'path': 'pos/Fireworks_7.jpg'},
    {'name': 'neu/Grass_1.jpg', 'path': 'neu/Grass_1.jpg'},
    {'name': 'neu/Skijump_1.jpg', 'path': 'neu/Skijump_1.jpg'},
    {'name': 'neu/Grass_5.jpg', 'path': 'neu/Grass_5.jpg'},
    {'name': 'neg/Explosion_1.jpg', 'path': 'neg/Explosion_1.jpg'},
    {'name': 'pos/Lake_10.jpg', 'path': 'pos/Lake_10.jpg'},
    {'name': 'neu/Grass_6.jpg', 'path': 'neu/Grass_6.jpg'},
    {'name': 'neu/House_1.jpg', 'path': 'neu/House_1.jpg'},
    {'name': 'neg/Soldiers_10.jpg', 'path': 'neg/Soldiers_10.jpg'},
    {'name': 'pos/Lake_12.jpg', 'path': 'pos/Lake_12.jpg'},
    {'name': 'neg/Fire_10.jpg', 'path': 'neg/Fire_10.jpg'},
    {'name': 'neu/Street_3.jpg', 'path': 'neu/Street_3.jpg'},
    {'name': 'neg/Car_crash_2.jpg', 'path': 'neg/Car_crash_2.jpg'},
    {'name': 'neg/Explosion_5.jpg', 'path': 'neg/Explosion_5.jpg'},
    {'name': 'pos/Lake_1.jpg', 'path': 'pos/Lake_1.jpg'},
    {'name': 'pos/Galaxy_2.jpg', 'path': 'pos/Galaxy_2.jpg'},
    {'name': 'pos/Lake_15.jpg', 'path': 'pos/Lake_15.jpg'},
    {'name': 'pos/Fireworks_5.jpg', 'path': 'pos/Fireworks_5.jpg'},
    {'name': 'neg/Fire_9.jpg', 'path': 'neg/Fire_9.jpg'},
    {'name': 'neg/Destruction_6.jpg', 'path': 'neg/Destruction_6.jpg'},
    {'name': 'neg/War_5.jpg', 'path': 'neg/War_5.jpg'},
    {'name': 'neu/Bar_1.jpg', 'path': 'neu/Bar_1.jpg'},
    {'name': 'pos/Lake_16.jpg', 'path': 'pos/Lake_16.jpg'},
    {'name': 'pos/Fireworks_3.jpg', 'path': 'pos/Fireworks_3.jpg'},
    {'name': 'pos/Fireworks_6.jpg', 'path': 'pos/Fireworks_6.jpg'},
    {'name': 'neu/Building_2.jpg', 'path': 'neu/Building_2.jpg'},
    {'name': 'neu/Moon_1.jpg', 'path': 'neu/Moon_1.jpg'},
    {'name': 'neu/Grass_2.jpg', 'path': 'neu/Grass_2.jpg'},
    {'name': 'neu/Camping_10.jpg', 'path': 'neu/Camping_10.jpg'},
    {'name': 'neg/Explosion_2.jpg', 'path': 'neg/Explosion_2.jpg'},
    {'name': 'neu/Street_4.jpg', 'path': 'neu/Street_4.jpg'},
    {'name': 'pos/Lake_14.jpg', 'path': 'pos/Lake_14.jpg'},
    {'name': 'neu/Grass_3.jpg', 'path': 'neu/Grass_3.jpg'},
    {'name': 'pos/Fireworks_1.jpg', 'path': 'pos/Fireworks_1.jpg'},
    {'name': 'neu/Neutral_pose_2.jpg', 'path': 'neu/Neutral_pose_2.jpg'},
    {'name': 'neu/Sky_1.jpg', 'path': 'neu/Sky_1.jpg'},
    {'name': 'neg/Cemetery_5.jpg', 'path': 'neg/Cemetery_5.jpg'},
    {'name': 'neu/Cold_5.jpg', 'path': 'neu/Cold_5.jpg'},
    {'name': 'pos/Beach_1.jpg', 'path': 'pos/Beach_1.jpg'},
    {'name': 'neg/Fire_7.jpg', 'path': 'neg/Fire_7.jpg'},
    {'name': 'pos/Beach_7.jpg', 'path': 'pos/Beach_7.jpg'},
    {'name': 'neg/Explosion_3.jpg', 'path': 'neg/Explosion_3.jpg'},
    {'name': 'neg/Fire_11.jpg', 'path': 'neg/Fire_11.jpg'},
    {'name': 'pos/Lake_2.jpg', 'path': 'pos/Lake_2.jpg'},
    {'name': 'neg/Flood_3.jpg', 'path': 'neg/Flood_3.jpg'},
    {'name': 'pos/Galaxy_7.jpg', 'path': 'pos/Galaxy_7.jpg'},
    {'name': 'neg/War_2.jpg', 'path': 'neg/War_2.jpg'},
    {'name': 'neu/Grass_4.jpg', 'path': 'neu/Grass_4.jpg'},
    {'name': 'neu/Grass_7.jpg', 'path': 'neu/Grass_7.jpg'},
    {'name': 'neg/Tornado_1.jpg', 'path': 'neg/Tornado_1.jpg'},
    {'name': 'pos/Rainbow_1.jpg', 'path': 'pos/Rainbow_1.jpg'},
    {'name': 'pos/Rainbow_2.jpg', 'path': 'pos/Rainbow_2.jpg'},
    {'name': 'pos/Sunset_4.jpg', 'path': 'pos/Sunset_4.jpg'},
    {'name': 'pos/Beach_8.jpg', 'path': 'pos/Beach_8.jpg'},
    {'name': 'neu/Street_2.jpg', 'path': 'neu/Street_2.jpg'},
    {'name': 'neg/Volcano_2.jpg', 'path': 'neg/Volcano_2.jpg'},
    {'name': 'neu/Snow_1.jpg', 'path': 'neu/Snow_1.jpg'},
    {'name': 'neu/Bored_pose_6.jpg', 'path': 'neu/Bored_pose_6.jpg'},
    {'name': 'pos/Lake_9.jpg', 'path': 'pos/Lake_9.jpg'},
    {'name': 'neg/Car_crash_3.jpg', 'path': 'neg/Car_crash_3.jpg'},
    {'name': 'neg/Flood_1.jpg', 'path': 'neg/Flood_1.jpg'},
    {'name': 'neu/Sailing_3.jpg', 'path': 'neu/Sailing_3.jpg'},
    {'name': 'neg/Dirt_1.jpg', 'path': 'neg/Dirt_1.jpg'},
    {'name': 'formal_b.csv', 'path': 'formal_b.csv'},
    {'name': 'pos/Sunset_2.jpg', 'path': 'pos/Sunset_2.jpg'},
    {'name': 'neu/Snow_3.jpg', 'path': 'neu/Snow_3.jpg'},
    {'name': 'neg/Fire_2.jpg', 'path': 'neg/Fire_2.jpg'},
    {'name': 'pos/Beach_2.jpg', 'path': 'pos/Beach_2.jpg'},
    {'name': 'neg/Car_crash_1.jpg', 'path': 'neg/Car_crash_1.jpg'},
    {'name': 'neu/Road_1.jpg', 'path': 'neu/Road_1.jpg'},
    {'name': 'neg/Plane_crash_3.jpg', 'path': 'neg/Plane_crash_3.jpg'},
    {'name': 'pos/Sunflower_1.jpg', 'path': 'pos/Sunflower_1.jpg'},
    {'name': 'neu/Street_1.jpg', 'path': 'neu/Street_1.jpg'},
    {'name': 'neg/War_8.jpg', 'path': 'neg/War_8.jpg'},
    {'name': 'default.png', 'path': 'default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: '欢迎参加本实验。\n\n本实验是关于情绪与记忆的一项研究。\n您将看到一系列字母和图片，\n并根据屏幕提示进行按键反应。\n实验全程约 20 分钟。\n\n您的数据仅用于学术研究，将严格保密。\n参与完全自愿，您可以在任何时候退出。\n\n如您同意参加，请按 空格键 继续。',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  consent_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "subject"
  subjectClock = new util.Clock();
  subject_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'subject_text',
    text: '被试编号将在开始时填写。\n\n请确认您已准备好，按 空格键 继续。',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  subject_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '指导语：\n\n每一轮中，屏幕中央会先出现一个「+」注视点，\n随后出现一串大写字母（3 个或 6 个），\n请记住这串字母。\n\n之后会短暂出现一张图片，\n请忽略图片，继续在脑海中保持刚才的字母。\n\n接着会出现一个单独的探测字母。\n请判断：这个探测字母是否在刚才那串字母中出现过。\n\n出现过 → 按 F 键\n没出现过 → 按 J 键\n\n请尽快、并尽可能准确地作答。\n\n先进行几轮练习。按 空格键 开始。',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  memSetStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'memSetStim',
    text: '',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.6, 0.9],
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  probeStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeStim',
    text: '',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_text',
    text: '',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_blank',
    text: '',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: '休息一下（30 秒），\n稍后实验自动继续。',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '实验结束，感谢您的参与！\n\n请按 空格键 退出。',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consentClock.reset();
    routineTimer.reset();
    consentMaxDurationReached = false;
    // update component parameters for each repeat
    consent_key.keys = undefined;
    consent_key.rt = undefined;
    _consent_key_allKeys = [];
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    consentMaxDuration = null
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_text);
    consentComponents.push(consent_key);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }
    
    
    // if consent_text is active this frame...
    if (consent_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *consent_key* updates
    if (t >= 0 && consent_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_key.tStart = t;  // (not accounting for frame time here)
      consent_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_key.clearEvents(); });
    }
    
    // if consent_key is active this frame...
    if (consent_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _consent_key_allKeys = _consent_key_allKeys.concat(theseKeys);
      if (_consent_key_allKeys.length > 0) {
        consent_key.keys = _consent_key_allKeys[0].name;  // just the first key pressed
        consent_key.rt = _consent_key_allKeys[0].rt;
        consent_key.duration = _consent_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_key.corr, level);
    }
    psychoJS.experiment.addData('consent_key.keys', consent_key.keys);
    if (typeof consent_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_key.rt', consent_key.rt);
        psychoJS.experiment.addData('consent_key.duration', consent_key.duration);
        routineTimer.reset();
        }
    
    consent_key.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function subjectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'subject' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    subjectClock.reset();
    routineTimer.reset();
    subjectMaxDurationReached = false;
    // update component parameters for each repeat
    subject_key.keys = undefined;
    subject_key.rt = undefined;
    _subject_key_allKeys = [];
    psychoJS.experiment.addData('subject.started', globalClock.getTime());
    subjectMaxDuration = null
    // keep track of which components have finished
    subjectComponents = [];
    subjectComponents.push(subject_text);
    subjectComponents.push(subject_key);
    
    for (const thisComponent of subjectComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function subjectRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'subject' ---
    // get current time
    t = subjectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *subject_text* updates
    if (t >= 0 && subject_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      subject_text.tStart = t;  // (not accounting for frame time here)
      subject_text.frameNStart = frameN;  // exact frame index
      
      subject_text.setAutoDraw(true);
    }
    
    
    // if subject_text is active this frame...
    if (subject_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *subject_key* updates
    if (t >= 0 && subject_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      subject_key.tStart = t;  // (not accounting for frame time here)
      subject_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { subject_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { subject_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { subject_key.clearEvents(); });
    }
    
    // if subject_key is active this frame...
    if (subject_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = subject_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _subject_key_allKeys = _subject_key_allKeys.concat(theseKeys);
      if (_subject_key_allKeys.length > 0) {
        subject_key.keys = _subject_key_allKeys[0].name;  // just the first key pressed
        subject_key.rt = _subject_key_allKeys[0].rt;
        subject_key.duration = _subject_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of subjectComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function subjectRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'subject' ---
    for (const thisComponent of subjectComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('subject.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(subject_key.corr, level);
    }
    psychoJS.experiment.addData('subject_key.keys', subject_key.keys);
    if (typeof subject_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('subject_key.rt', subject_key.rt);
        psychoJS.experiment.addData('subject_key.duration', subject_key.duration);
        routineTimer.reset();
        }
    
    subject_key.stop();
    // the Routine "subject" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instr_key.keys = undefined;
    instr_key.rt = undefined;
    _instr_key_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(instr_key);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_key* updates
    if (t >= 0 && instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key.tStart = t;  // (not accounting for frame time here)
      instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key.clearEvents(); });
    }
    
    // if instr_key is active this frame...
    if (instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instr_key_allKeys = _instr_key_allKeys.concat(theseKeys);
      if (_instr_key_allKeys.length > 0) {
        instr_key.keys = _instr_key_allKeys[0].name;  // just the first key pressed
        instr_key.rt = _instr_key_allKeys[0].rt;
        instr_key.duration = _instr_key_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key.corr, level);
    }
    psychoJS.experiment.addData('instr_key.keys', instr_key.keys);
    if (typeof instr_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key.rt', instr_key.rt);
        psychoJS.experiment.addData('instr_key.duration', instr_key.duration);
        routineTimer.reset();
        }
    
    instr_key.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.csv',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(trialRoutineEachFrame());
      practice_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(feedbackRoutineEachFrame());
      practice_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(itiRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(itiRoutineEachFrame());
      practice_loopLoopScheduler.add(itiRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function formal_a_loopLoopBegin(formal_a_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    formal_a_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'formal_a.csv',
      seed: undefined, name: 'formal_a_loop'
    });
    psychoJS.experiment.addLoop(formal_a_loop); // add the loop to the experiment
    currentLoop = formal_a_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFormal_a_loop of formal_a_loop) {
      snapshot = formal_a_loop.getSnapshot();
      formal_a_loopLoopScheduler.add(importConditions(snapshot));
      formal_a_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      formal_a_loopLoopScheduler.add(trialRoutineEachFrame());
      formal_a_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      formal_a_loopLoopScheduler.add(itiRoutineBegin(snapshot));
      formal_a_loopLoopScheduler.add(itiRoutineEachFrame());
      formal_a_loopLoopScheduler.add(itiRoutineEnd(snapshot));
      formal_a_loopLoopScheduler.add(formal_a_loopLoopEndIteration(formal_a_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function formal_a_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(formal_a_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function formal_a_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function formal_b_loopLoopBegin(formal_b_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    formal_b_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'formal_b.csv',
      seed: undefined, name: 'formal_b_loop'
    });
    psychoJS.experiment.addLoop(formal_b_loop); // add the loop to the experiment
    currentLoop = formal_b_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFormal_b_loop of formal_b_loop) {
      snapshot = formal_b_loop.getSnapshot();
      formal_b_loopLoopScheduler.add(importConditions(snapshot));
      formal_b_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      formal_b_loopLoopScheduler.add(trialRoutineEachFrame());
      formal_b_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      formal_b_loopLoopScheduler.add(itiRoutineBegin(snapshot));
      formal_b_loopLoopScheduler.add(itiRoutineEachFrame());
      formal_b_loopLoopScheduler.add(itiRoutineEnd(snapshot));
      formal_b_loopLoopScheduler.add(formal_b_loopLoopEndIteration(formal_b_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function formal_b_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(formal_b_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function formal_b_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(6.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    memSetStim.setText(memSet);
    img.setImage(image);
    probeStim.setText(probe);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(memSetStim);
    trialComponents.push(img);
    trialComponents.push(probeStim);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    
    // *memSetStim* updates
    if (t >= 0.5 && memSetStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memSetStim.tStart = t;  // (not accounting for frame time here)
      memSetStim.frameNStart = frameN;  // exact frame index
      
      memSetStim.setAutoDraw(true);
    }
    
    
    // if memSetStim is active this frame...
    if (memSetStim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (memSetStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      memSetStim.tStop = t;  // not accounting for scr refresh
      memSetStim.frameNStop = frameN;  // exact frame index
      // update status
      memSetStim.status = PsychoJS.Status.FINISHED;
      memSetStim.setAutoDraw(false);
    }
    
    
    // *img* updates
    if (t >= 2.0 && img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img.tStart = t;  // (not accounting for frame time here)
      img.frameNStart = frameN;  // exact frame index
      
      img.setAutoDraw(true);
    }
    
    
    // if img is active this frame...
    if (img.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 2.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      img.tStop = t;  // not accounting for scr refresh
      img.frameNStop = frameN;  // exact frame index
      // update status
      img.status = PsychoJS.Status.FINISHED;
      img.setAutoDraw(false);
    }
    
    
    // *probeStim* updates
    if (t >= 3.5 && probeStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeStim.tStart = t;  // (not accounting for frame time here)
      probeStim.frameNStart = frameN;  // exact frame index
      
      probeStim.setAutoDraw(true);
    }
    
    
    // if probeStim is active this frame...
    if (probeStim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 3.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (probeStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      probeStim.tStop = t;  // not accounting for scr refresh
      probeStim.frameNStop = frameN;  // exact frame index
      // update status
      probeStim.status = PsychoJS.Status.FINISHED;
      probeStim.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 3.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    frameRemains = 3.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp.tStop = t;  // not accounting for scr refresh
      key_resp.frameNStop = frameN;  // exact frame index
      // update status
      key_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 3.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp.tStop = t;  // not accounting for scr refresh
        key_resp.frameNStop = frameN;  // exact frame index
        // update status
        key_resp.status = PsychoJS.Status.FINISHED;
        key_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({
          keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
          waitRelease: false
        });
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
          key_resp.rt = _key_resp_allKeys[0].rt;
          key_resp.duration = _key_resp_allKeys[0].duration;
          // was this correct?
          if (key_resp.keys == corrAns) {
              key_resp.corr = 1;
          } else {
              key_resp.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  function trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial' ---
      for (const thisComponent of trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp.keys === undefined) {
        if (['None','none',undefined].includes(corrAns)) {
           key_resp.corr = 1;  // correct non-response
        } else {
           key_resp.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (trialMaxDurationReached) {
          trialClock.add(trialMaxDuration);
      } else {
          trialClock.add(6.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  function feedbackRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'feedback' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      feedbackClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      feedbackMaxDurationReached = false;
      // update component parameters for each repeat
      fb_text.setText((key_resp.corr ? '正确' : '错误'));
      psychoJS.experiment.addData('feedback.started', globalClock.getTime());
      feedbackMaxDuration = null
      // keep track of which components have finished
      feedbackComponents = [];
      feedbackComponents.push(fb_text);
      
      for (const thisComponent of feedbackComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  function feedbackRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'feedback' ---
      // get current time
      t = feedbackClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fb_text* updates
      if (t >= 0 && fb_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fb_text.tStart = t;  // (not accounting for frame time here)
        fb_text.frameNStart = frameN;  // exact frame index
        
        fb_text.setAutoDraw(true);
      }
      
      
      // if fb_text is active this frame...
      if (fb_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fb_text.tStop = t;  // not accounting for scr refresh
        fb_text.frameNStop = frameN;  // exact frame index
        // update status
        fb_text.status = PsychoJS.Status.FINISHED;
        fb_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of feedbackComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  function feedbackRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'feedback' ---
      for (const thisComponent of feedbackComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (feedbackMaxDurationReached) {
          feedbackClock.add(feedbackMaxDuration);
      } else {
          feedbackClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  function itiRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'iti' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      itiClock.reset(routineTimer.getTime());
      routineTimer.add(0.300000);
      itiMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('iti.started', globalClock.getTime());
      itiMaxDuration = null
      // keep track of which components have finished
      itiComponents = [];
      itiComponents.push(iti_blank);
      
      for (const thisComponent of itiComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  function itiRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'iti' ---
      // get current time
      t = itiClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *iti_blank* updates
      if (t >= 0 && iti_blank.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        iti_blank.tStart = t;  // (not accounting for frame time here)
        iti_blank.frameNStart = frameN;  // exact frame index
        
        iti_blank.setAutoDraw(true);
      }
      
      
      // if iti_blank is active this frame...
      if (iti_blank.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (iti_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        iti_blank.tStop = t;  // not accounting for scr refresh
        iti_blank.frameNStop = frameN;  // exact frame index
        // update status
        iti_blank.status = PsychoJS.Status.FINISHED;
        iti_blank.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of itiComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  function itiRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'iti' ---
      for (const thisComponent of itiComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('iti.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (itiMaxDurationReached) {
          itiClock.add(itiMaxDuration);
      } else {
          itiClock.add(0.300000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  function restRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'rest' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      restClock.reset(routineTimer.getTime());
      routineTimer.add(30.000000);
      restMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('rest.started', globalClock.getTime());
      restMaxDuration = null
      // keep track of which components have finished
      restComponents = [];
      restComponents.push(break_text);
      
      for (const thisComponent of restComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  function restRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'rest' ---
      // get current time
      t = restClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *break_text* updates
      if (t >= 0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        break_text.tStart = t;  // (not accounting for frame time here)
        break_text.frameNStart = frameN;  // exact frame index
        
        break_text.setAutoDraw(true);
      }
      
      
      // if break_text is active this frame...
      if (break_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (break_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        break_text.tStop = t;  // not accounting for scr refresh
        break_text.frameNStop = frameN;  // exact frame index
        // update status
        break_text.status = PsychoJS.Status.FINISHED;
        break_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of restComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  function restRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'rest' ---
      for (const thisComponent of restComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (restMaxDurationReached) {
          restClock.add(restMaxDuration);
      } else {
          restClock.add(30.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  function endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      endClock.reset();
      routineTimer.reset();
      endMaxDurationReached = false;
      // update component parameters for each repeat
      end_key.keys = undefined;
      end_key.rt = undefined;
      _end_key_allKeys = [];
      psychoJS.experiment.addData('end.started', globalClock.getTime());
      endMaxDuration = null
      // keep track of which components have finished
      endComponents = [];
      endComponents.push(end_text);
      endComponents.push(end_key);
      
      for (const thisComponent of endComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  function endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end' ---
      // get current time
      t = endClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *end_text* updates
      if (t >= 0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        end_text.tStart = t;  // (not accounting for frame time here)
        end_text.frameNStart = frameN;  // exact frame index
        
        end_text.setAutoDraw(true);
      }
      
      
      // if end_text is active this frame...
      if (end_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *end_key* updates
      if (t >= 0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        end_key.tStart = t;  // (not accounting for frame time here)
        end_key.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
      }
      
      // if end_key is active this frame...
      if (end_key.status === PsychoJS.Status.STARTED) {
        let theseKeys = end_key.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
        if (_end_key_allKeys.length > 0) {
          end_key.keys = _end_key_allKeys[0].name;  // just the first key pressed
          end_key.rt = _end_key_allKeys[0].rt;
          end_key.duration = _end_key_allKeys[0].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of endComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  function endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end' ---
      for (const thisComponent of endComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('end.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(end_key.corr, level);
      }
      psychoJS.experiment.addData('end_key.keys', end_key.keys);
      if (typeof end_key.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('end_key.rt', end_key.rt);
          psychoJS.experiment.addData('end_key.duration', end_key.duration);
          routineTimer.reset();
          }
      
      end_key.stop();
      // the Routine "end" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
