

document.addEventListener('DOMContentLoaded', function() {
    const jsonData = {
        "_id": {
            "$oid": "63b64dc9e3b230ebb60a495d"
        },
        "_key": "topic:2085",
        "category": "Course",
        "cid": {
            "$numberDouble": "NaN"
        },
        "commitment": "4 hours",
        "commitment_type": "custom",
        "deadline": "",
        "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
        "faqs": [],
        "globalTags": [],
        "isActive": true,
        "lastposttime": 0,
        "learning_outcomes": [
            "Bare minimum knowledge of project management",
            "4SA Concept",
            "Would be able to handle any project efficiently"
        ],
        "mainPid": 0,
        "postcount": 0,
        "pre_requisites": [
            "An open mind to learn any concept",
            "Thought of Unlearning and Relearning "
        ],
        "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
        "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
        "slug": "2085/technical-project-management",
        "status": "published",
        "tasks": [
            {
                "task_id": 18882,
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
                "status": "notworkyet",
                "assets": [
                    {
                        "asset_id": 18883,
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_id": 18884,
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_id": 18885,
                        "asset_title": "Structure your pointers",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                    },
                    {
                        "asset_id": 18886,
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                    }
                ]
            }
        ],
        "tid": 2085,
        "timestamp": 1672891849700,
        "title": "Technical Project Management",
        "type": "project",
        "uid": 100,
        "viewcount": 0,
        "publishedAt": 1672893847792
    };

    const navIcons = [
        "assets/Group 1097.png",
        "assets/Group 1100.png",
        "assets/Vector (3).png",
        "assets/Ellipse 53.png"
    ];

    const navIconsContainer = document.getElementById('nav-icons');
    navIcons.forEach(icon => {
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = icon;
        a.appendChild(img);
        navIconsContainer.appendChild(a);
    });

    const pageContainer = document.getElementById('page');

    const section = document.createElement('section');
    section.id = 'section2';

    const headingDiv = document.createElement('div');
    headingDiv.id = 'heading';

    const h1Div = document.createElement('div');
    h1Div.id = 'h1';
    const h3 = document.createElement('h3');
    h3.textContent = jsonData.title;
    h3.style.cursor = 'pointer';
    const button = document.createElement('button');
    button.textContent = 'Submit Task';
    h1Div.appendChild(h3);
    h1Div.appendChild(button);

    const h2Div = document.createElement('div');
    h2Div.id = 'h2';
    const h4 = document.createElement('h4');
    h4.textContent = jsonData.short_description;
    const p = document.createElement('p');
    p.innerHTML = jsonData.description;
    h2Div.appendChild(h4);
    h2Div.appendChild(p);

    headingDiv.appendChild(h1Div);
    headingDiv.appendChild(h2Div);

    const componentsDiv = document.createElement('div');
   

    const assetContainer = document.createElement('div');
    assetContainer.id = 'asset-container';

    jsonData.tasks[0].assets.forEach(asset => {
        const assetDiv = document.createElement('div');
        const assetTitle = document.createElement('h5');
        assetTitle.textContent = asset.asset_title;
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = asset.asset_description;
        assetDiv.classList.add("class"+asset.asset_id)

        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        arrow.innerHTML = '<img src="assets/arrow_drop_down_24dp_FILL0_wght400_GRAD0_opsz24.svg" /> ';
        arrow.addEventListener('click', () => {
            descriptionDiv.classList.toggle('expanded');
        });

        assetDiv.appendChild(assetTitle);
        assetDiv.appendChild(arrow);
        assetDiv.appendChild(descriptionDiv);
        assetContainer.appendChild(assetDiv);

        if (asset.asset_content_type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = asset.asset_content;
            iframe.width = '560';
            iframe.height = '315';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            assetDiv.appendChild(iframe);
        } else if (asset.asset_content_type === 'article') {
            const link = document.createElement('a');
            link.href = asset.asset_content;
            link.textContent = 'Read More';
            link.target = '_blank';
            assetDiv.appendChild(link);
        } else if (asset.asset_content_type === 'threadbuilder') {
            const input = document.createElement("input");
            assetDiv.appendChild(input);
        }
        
        if(asset.asset_id === 18884){
            const div1 = document.createElement("div");
            div1.classList.add("assest2-inputs");
            const h4 =  document.createElement("h4");
            h4.innerText = "Thread A";

            const div2 = document.createElement("div");
            const p = document.createElement("p");
            p.innerText = "SubThread 1";
            const input = document.createElement("input");
            input.placeholder = "Enter text here";

            div2.appendChild(p);
            div2.appendChild(input);

            const div3 = document.createElement("div");
            const p3 = document.createElement("p");
            p3.innerText = "Sub Interpretation 1";
            const input2 = document.createElement("input");
            input.placeholder = "Enter text here";

            div3.appendChild(p3);
            div3.appendChild(input2);

            assetDiv.appendChild(h4);
            div1.appendChild(div2);
            div1.appendChild(div3);
            assetDiv.appendChild(div1);

            const div4 = document.createElement("div");
            div4.classList.add("imgSelect");
            const img4 = document.createElement("img");
            img4.src = "./assets/Group 1588.png";

            const select1 = document.createElement("select");
            const option1 = document.createElement("option");
            option1.innerText = "select category 1";
            const option2 = document.createElement("option");
            option2.innerText = "select category 2";

            select1.appendChild(option1);
            select1.appendChild(option2);

            const select2 = document.createElement("select");
            const option3 = document.createElement("option");
            option3.innerText = "select category 3";
            const option4 = document.createElement("option");
            option4.innerText = "select category 4";

            select2.appendChild(option3);
            select2.appendChild(option4);

            div4.appendChild(img4);
            div4.appendChild(select1);
            div4.appendChild(select2);
            assetDiv.appendChild(div4);

            const button2 = document.createElement("button");
            button2.innerText = "+ SubThread";

            assetDiv.appendChild(button2);

            const div5 = document.createElement("div");
            div5.classList.add("summery");
            const head = document.createElement("p");
            head.innerText = "summery for thread A";
            const body =  document.createElement("input");
            body.placeholder = "Enter Text Here";

            div5.appendChild(head);
            head.appendChild(body);
            assetDiv.appendChild(div5);

        }

        if(asset.asset_id === 18885){
            const div1 = document.createElement("div");
            div1.classList.add("asset3");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");

            const h1 = document.createElement("h4");
            h1.innerText = "Title";
            const h2 = document.createElement("h4");
            h2.innerText = "Content";

            const p1 = document.createElement("textarea");
            const p2 = document.createElement("textarea");

            div2.appendChild(h1);
            div2.appendChild(p1);
            assetDiv.appendChild(div2);

            div3.appendChild(h2);
            div3.appendChild(p2);

            div1.appendChild(div2);
            div1.appendChild(div3);
            assetDiv.appendChild(div1);
        }

        if(asset.asset_id === 18886){
            const div1 = document.createElement("div");
            div1.classList.add("asset4");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
            const div4 = document.createElement("div");

            const h1 = document.createElement("p");
            h1.classList.add("a4-h1");
            h1.innerText = "Introdunction";
            const h2 = document.createElement("p");
            h2.classList.add("a4-h2");
            h2.innerText = "Thread A";
            const h3 = document.createElement("p");
            h3.classList.add("a4-h3");
            h3.innerText = "Example 1";

            const p1 = document.createElement("p");
            p1.innerText = "The 4SA Method , How to bring a idea into progress ?";
            const p2 = document.createElement("p");
            p2.innerText = "How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?";
            const p3 = document.createElement("p");
            p3.innerText = "You have a concept , How will you put into progress?";

            div2.appendChild(h1);
            div2.appendChild(p1);
            assetDiv.appendChild(div2);

            div3.appendChild(h2);
            div3.appendChild(p2);

            div4.appendChild(h3);
            div4.appendChild(p3);

            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            assetDiv.appendChild(div1);
        }

    });

    componentsDiv.appendChild(assetContainer);
    section.appendChild(headingDiv);
    section.appendChild(componentsDiv);
    pageContainer.appendChild(section);

    const arrow = document.querySelector("#arrow>img");
    const arrowDetail = document.getElementById("arrow-detail");
    const number = document.getElementById("number");
    console.log(number);
    arrow.addEventListener("click",()=>{
         arrowDetail.classList.toggle('expanded');
         number.classList.toggle('expanded');
    })
});

