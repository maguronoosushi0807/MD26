// ===== 設定 =====

const TOTAL_MIN = 8;
const TOTAL_SEC = 0;

const TOTAL_TIME = TOTAL_MIN * 60 + TOTAL_SEC;

const TOTAL_TEXT =
    TOTAL_MIN.toString().padStart(2,"0")
    + ":"
    + TOTAL_SEC.toString().padStart(2,"0");

const MD_FILE = "script.md";


// =================

let timeline=[];
let totalUnits=1;

let playing=false;
let startTime=0;
let offset=0;

const playBtn=document.getElementById("play");
const progress=document.getElementById("progress");
const timeText=document.getElementById("time");
const content=document.getElementById("content");

progress.max = TOTAL_TIME;


async function loadMarkdown(){

    const res=await fetch(MD_FILE);
    const md=await res.text();

    const html=marked.parse(md);

    content.innerHTML=html;

    wrap(content);

    buildTimeline();

    requestAnimationFrame(loop);
}



function wrap(node){

    if(node.nodeType===3){

        const span=document.createElement("span");

        for(let c of node.nodeValue){

            const s=document.createElement("span");
            s.textContent=c;
            s.className="char";

            span.appendChild(s);
        }

        node.replaceWith(span);
    }
    else{

        node.childNodes.forEach(wrap);
    }
}



function weightOf(c){

    if(c==="、") return 1;
    if(c==="。") return 2;

    return 1;
}



function buildTimeline(){

    timeline=[];

    content.childNodes.forEach(node=>{

        if(/^H[1-6]$/.test(node.tagName)){

            const chars=[...node.querySelectorAll(".char")];

            timeline.push({
                chars:chars,
                weight:1
            });

        }
        else{

            const chars=node.querySelectorAll?.(".char");

            if(chars){

                chars.forEach(c=>{

                    let t=c.textContent;

                    if(t.trim()==="") return;

                    timeline.push({
                        chars:[c],
                        weight:weightOf(t)
                    });

                });

            }

        }

    });

    totalUnits=timeline.reduce(
        (a,b)=>a+b.weight,0
    );
}



playBtn.onclick=()=>{

    if(!playing){

        playing=true;
        startTime=performance.now()-offset*1000;
        playBtn.classList.add("stop");
    }
    else{

        playing=false;
        offset=(performance.now()-startTime)/1000;
        playBtn.classList.remove("stop");
    }
};



progress.oninput=()=>{

    offset=progress.value;
    startTime=performance.now()-offset*1000;
};



function loop(){

    if(playing){

        offset=(performance.now()-startTime)/1000;
    }

    if(offset<0)offset=0;
    if(offset>TOTAL_TIME)offset=TOTAL_TIME;

    progress.value=offset;

    let m=Math.floor(offset/60);
    let s=Math.floor(offset%60);

    let t=
        m.toString().padStart(2,"0")
        + ":"
        + s.toString().padStart(2,"0");

    timeText.textContent=
        // "["+t+"/"+TOTAL_TEXT+"]";
        t;


    let ratio=offset/TOTAL_TIME;

    let target=ratio*totalUnits;


    let acc=0;

    timeline.forEach(unit=>{

        acc+=unit.weight;

        let read=acc<=target;

        unit.chars.forEach(c=>{

            if(read)
                c.classList.add("read");
            else
                c.classList.remove("read");

        });

    });


    /* バー色 */

    let percent=ratio*100;

    progress.style.background =
        `linear-gradient(
            to right,
            #ff0000 0%,
            #ff0000 ${percent}%,
            #555 ${percent}%,
            #555 100%
        )`;


    requestAnimationFrame(loop);
}



loadMarkdown();