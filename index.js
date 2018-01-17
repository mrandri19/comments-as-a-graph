document.addEventListener('DOMContentLoaded', () => {
  const graph = document.getElementById('graph');
  const container = document.getElementById('container');

  let sizes;

  // Set up observer to create minimap when the graph is rendered
  const observer = new MutationObserver(() => {
    const svgString = new XMLSerializer().serializeToString(document.querySelector('#graph > svg'));

    const canvas = document.createElement('canvas');
    canvas.id = 'minimap-canvas';

    const canvasWidth = (window.innerWidth > 768) ?
      window.innerWidth * 0.20 :
      window.innerWidth * 0.475;

    canvas.width = canvasWidth;
    canvas.height = canvas.width * (sizes.height / sizes.width);
    canvas.classList.add('minimap');

    document.getElementById('minimap-container').appendChild(canvas);

    const minimapSquare = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    minimapSquare.id = 'minimap-square';
    minimapSquare.setAttribute('width', canvas.width);
    minimapSquare.setAttribute('height', canvas.height);
    minimapSquare.classList.add('minimap');

    minimapSquare.innerHTML =
      '<g><rect id="minimap-rect" fill="red" fill-opacity="0.1" stroke="red" stroke-width="2px" x="0" y="0" width="" height="" /></g>';

    document.getElementById('minimap-container').appendChild(minimapSquare);

    const ctx = canvas.getContext('2d');
    const img = new Image();
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });

  observer.observe(graph, {
    attributes: true,
    characterData: true,
    childList: true,
  });

  const source = `
    graph {
        node [color="#B7C5D9" fillcolor="#d6daf0" fontname="helvetica, open-sans" shape=rectangle style=filled]
        bgcolor="#eef2ff" fontname="helvetica, open-sans" splines=true
        42064745 [color="#B7C5D9" fillcolor="#b7c5d9"]
        42064745 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Redpill me on white rice, /fit/.  <BR/>Its good?  <BR/>Its bad?<BR/></FONT></TD></TR></TABLE>>]
        42064762 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Its nice?<BR/></FONT></TD></TR></TABLE>>]
        42064770 -- 42064745
        42064770 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>Do you do a lot of cardio? I'd get brown rice if possible just so you can take<BR/>advantage of the extra fiber and vitamins.<BR/></FONT></TD></TR></TABLE>>]
        42064771 -- 42064762
        42064771 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064762  <BR/>white rice master rice<BR/></FONT></TD></TR></TABLE>>]
        42064774 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Recent mass production and consumption of whiter varieties of rice in China<BR/>has lead it to have a higher diabetes rate than the US now<BR/></FONT></TD></TR></TABLE>>]
        42064778 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>insulin spike is not worth it  <BR/>brown rice is the way to go,or better yet, sweet potatoes. Simple carbs have<BR/>no place in your diet if you truly want to make it.<BR/></FONT></TD></TR></TABLE>>]
        42064783 -- 42064770
        42064783 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064770  <BR/>&gt;Do you do a lot of cardio?  <BR/>No.  <BR/>  <BR/>&gt;extra fiber and vitamins  <BR/>Its minimal compared to white rice master rice<BR/></FONT></TD></TR></TABLE>>]
        42064786 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>good? bad? for what? health and fitness is more complicated than "good" and<BR/>"bad"<BR/></FONT></TD></TR></TABLE>>]
        42064796 -- 42064745
        42064796 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>it's fine, no need to be paranoid about it.<BR/></FONT></TD></TR></TABLE>>]
        42064799 -- 42064786
        42064799 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064786  <BR/>FOR GAINS , MUDAFUCA  <BR/>FOR GAINZ<BR/></FONT></TD></TR></TABLE>>]
        42064803 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>White rice = Simple Carbs<BR/></FONT></TD></TR></TABLE>>]
        42064806 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>White rice is literally the worst thing ever in terms of nutrition  <BR/>  <BR/>Get brown/black rice, it's bigger and more nutritious<BR/></FONT></TD></TR></TABLE>>]
        42064811 -- 42064806
        42064811 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064806  <BR/>nice meme<BR/></FONT></TD></TR></TABLE>>]
        42064813 -- 42064806
        42064813 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064806  <BR/>&gt;Get brown/black rice, it's bigger and more nutritious  <BR/>  <BR/>I wonder who could be behind this post<BR/></FONT></TD></TR></TABLE>>]
        42064821 -- 42064806
        42064821 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064806  <BR/>white rice is the hitler of the foods<BR/></FONT></TD></TR></TABLE>>]
        42064831 -- 42064813
        42064831 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064813  <BR/>t. butthurt white rice-eating DYEL<BR/></FONT></TD></TR></TABLE>>]
        42064843 -- 42064806
        42064843 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064806  <BR/>good goy  <BR/>always go blacked  <BR/>black is good<BR/></FONT></TD></TR></TABLE>>]
        42064848 -- 42064745
        42064848 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>i know this dude who ate white rice who later lost all his gains, became fat,<BR/>and married. what ever you do, DO NOT eat white rice.<BR/></FONT></TD></TR></TABLE>>]
        42064860 -- 42064848
        42064860 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064848  <BR/>i lift for the girls, a little  <BR/>did he married a qt?  <BR/>  <BR/>im gonna start eating white rice right now<BR/></FONT></TD></TR></TABLE>>]
        42064897 -- 42064774
        42064897 -- 42064778
        42064897 -- 42064806
        42064897 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064774  <BR/>&gt;&gt;42064778  <BR/>&gt;&gt;42064806  <BR/>  <BR/>&gt;ketofags blaming carbs for obesity instead of modernization ie: sedentary<BR/>living and food surplus  <BR/>  <BR/>People in China are consuming *less* rice than ever. Rice is seen as a poor<BR/>person's food and so people prefer meat. The Chinese are literally eating less<BR/>rice and more meat.  <BR/>  <BR/>&gt;ketofags will still blame carbs<BR/></FONT></TD></TR></TABLE>>]
        42064922 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>what can i add to my rice?<BR/></FONT></TD></TR></TABLE>>]
        42064935 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>what the fuck is redpill?  <BR/>  <BR/>&gt;google "redpill"  <BR/>&gt;first thing that comes up is a plebbit page about hating women  <BR/>  <BR/>go back, you aspie<BR/></FONT></TD></TR></TABLE>>]
        42064945 -- 42064897
        42064945 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064897  <BR/>And people in China are finally getting taller. White rice is a manlet food,<BR/>deal with it.<BR/></FONT></TD></TR></TABLE>>]
        42064973 -- 42064945
        42064973 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064945  <BR/>&gt;tfw us lost the vietnam war to white rice eaters  <BR/>  <BR/>Deal with it<BR/></FONT></TD></TR></TABLE>>]
        42064980 -- 42064973
        42064980 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>WHITE RICE FTW<BR/></FONT></TD></TR></TABLE>>]
        42064985 -- 42064935
        42064985 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064935  <BR/>Is this bait? Have you really never seen the matrix? kys<BR/></FONT></TD></TR></TABLE>>]
        42065005 -- 42064897
        42065005 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064897  <BR/>&gt;what is a correlation<BR/></FONT></TD></TR></TABLE>>]
        42065024 -- 42064897
        42065024 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064897  <BR/>Less, but white  <BR/>  <BR/>that's the point  <BR/>  <BR/>also what use is a graph of absolute level of meat consumption across two<BR/>countries with different populations<BR/></FONT></TD></TR></TABLE>>]
        42065025 -- 42064973
        42065025 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>And fish heads<BR/></FONT></TD></TR></TABLE>>]
        42065038 -- 42064745
        42065038 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>SEasian here. Health-conscious people here avoid white rice and bread. Go for<BR/>brown rice, harder to eat and shorter shelf life but it's healthier.<BR/></FONT></TD></TR></TABLE>>]
        42065046 -- 42065025
        42065046 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42065025  <BR/>yes, and fish heads.<BR/></FONT></TD></TR></TABLE>>]
        42065049 -- 42064745
        42065049 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>There's all this ho-hum about brown rice having "anti nutrients". Overall I<BR/>think your average person and even average lifter should only go for brown<BR/>rice.<BR/></FONT></TD></TR></TABLE>>]
        42065068 -- 42065038
        42065068 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42065038  <BR/>health-conscious people here avoid cholesterol rich foods.  <BR/>health-conscious people knew shit.<BR/></FONT></TD></TR></TABLE>>]
        42065113 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;eat brown rice  <BR/>  <BR/>i did. it tastes awful.<BR/></FONT></TD></TR></TABLE>>]
        42065118 -- 42065113
        42065118 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42065113  <BR/>dats racist<BR/></FONT></TD></TR></TABLE>>]
        42065719 -- 42064973
        42065719 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>&gt;theres mcdonalds in vietnam and the country is a sex tourism mecca for white<BR/>dudes  <BR/>i wouldnt say won<BR/></FONT></TD></TR></TABLE>>]
        42065776 -- 42064973
        42065776 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>would suggest you develop a more nuanced sense of history. Everybody involved<BR/>lost the vietnam war, fuck son, even *china* lost the vietnam war. After US<BR/>departure from vietnam the vietnamese invaded and deposed the chinese-backed<BR/>khmer rouge from cambodia, china responded with a punitive invasion in 1979.<BR/>read a fucking book<BR/></FONT></TD></TR></TABLE>>]
        42065797 -- 42064745
        42065797 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>  <BR/>Good when you mix it with a source of protein.  <BR/>  <BR/>Bad if you eat it alone.<BR/></FONT></TD></TR></TABLE>>]
        42065841 -- 42064771
        42065841 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064771  <BR/>rite rice rasta rice<BR/></FONT></TD></TR></TABLE>>]
        42066057 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;tfw your body gives zero fucks about the type of rice you eat and it's all<BR/>literally the same so you can choose to enjoy the good stuff like white<BR/>basmati  <BR/>each day I thank God for my properly developed brain<BR/></FONT></TD></TR></TABLE>>]
        42066073 -- 42064897
        42066073 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064897  <BR/>&gt;le correlation = causation face  <BR/>  <BR/>goddamn retard  <BR/>  <BR/>poor people eat almost entirely rice  <BR/>poor people dont get fat  <BR/>rich people eat a lot of meat  <BR/>rich people get fat  <BR/>fat people get diabetes<BR/></FONT></TD></TR></TABLE>>]
        42066077 -- 42066073
        42066077 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066073  <BR/>  <BR/>&gt;poor people don't get fat  <BR/>  <BR/>Look at this fucking retard and just laugh honestly.<BR/></FONT></TD></TR></TABLE>>]
        42066081 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Its good, eating a carb with proteins and a bit of fat lowers its glycemic<BR/>index dramatically.<BR/></FONT></TD></TR></TABLE>>]
        42066086 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;not eating black rice  <BR/>  <BR/>https://nutritionfacts.org/video/brown-black-purple-red-unlike-white-rice/<BR/></FONT></TD></TR></TABLE>>]
        42066093 -- 42064848
        42066093 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064848  <BR/>  <BR/>I know 2 billion of asians that are skelly, checkmate.<BR/></FONT></TD></TR></TABLE>>]
        42066182 -- 42064745
        42066182 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>White rice has more carbs, literally why I started eating Jasmine rice.<BR/></FONT></TD></TR></TABLE>>]
        42066528 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>White rice is GOAT. Brown rice is a meme. Basmati White rice for life. It's<BR/>godsend for a bulk, good source of carbs and cals.  <BR/>Basmati rice or bust though, every other type of white rice will fuck your<BR/>shit up<BR/></FONT></TD></TR></TABLE>>]
        42066603 -- 42066528
        42066603 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066528  <BR/>  <BR/>Brown rice made Kanye crazy desu. Arsenic poisoning. Maybe people should<BR/>consider that theres a reason why chinese ate their rice refined/white after<BR/>5000+ years of experience growing it. But no, suddenly brown rice is the<BR/>healthy thing to eat.<BR/></FONT></TD></TR></TABLE>>]
        42066630 -- 42066603
        42066630 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066603  <BR/>I like to call it the normie wave. Normies like weird things. Back home(India)<BR/>my folks flipped their shit when I mentioned brown rice. And if there's one<BR/>thing I know, family is never wrong, and Indian mothers are never wrong about<BR/>food. Incidentally, all the brown rice eating people I know are also the dyel<BR/>ones. But yeah, the chinese are dumb fucks, brown rice amirite. Fucking<BR/>faggots.<BR/></FONT></TD></TR></TABLE>>]
        42066674 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>so is brown rice not superior to white rice? I really want to just have white<BR/>rice instead brown rice never tastes good.<BR/></FONT></TD></TR></TABLE>>]
        42066689 -- 42064745
        42066689 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>It's food boy, just food.<BR/></FONT></TD></TR></TABLE>>]
        42066707 -- 42066674
        42066707 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066674  <BR/>Not really. Just get quality white rice, not from some supermarket but ask<BR/>your local indian/chinese restaurant.  <BR/>Don't overdo it though anon, you'll get fat. Just enough to meet your macros<BR/></FONT></TD></TR></TABLE>>]
        42066736 -- 42066603
        42066736 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066603  <BR/>  <BR/>&gt;Maybe people should consider that theres a reason why chinese ate their rice<BR/>refined/white after 5000+ years of experience growing it  <BR/>  <BR/>Brown rice was eaten exclusively until maybe 200 years ago tops. Then white<BR/>rice became popular among the wealthy because it tasted better than brown<BR/>rice. When white rice gradually become popular among the lower classes, a<BR/>disease called beriberi became common, caused by thiamine (vitamin B1)<BR/>deficiency, which is removed with the bran during refining. Brown rice became<BR/>the staple again, until white rice production advanced to the point where<BR/>white rice was cheaper than brown, and by then people knew how to avoid<BR/>beriberi.  <BR/>  <BR/>They don't eat white rice because it's better for health. It just tastes<BR/>better and is the cheapest calorie source available.<BR/></FONT></TD></TR></TABLE>>]
        42066754 -- 42066736
        42066754 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066736  <BR/>t. nu male<BR/></FONT></TD></TR></TABLE>>]
        42066755 -- 42066736
        42066755 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066736  <BR/>  <BR/>That's beriberi interesting :)<BR/></FONT></TD></TR></TABLE>>]
        42066770 -- 42064745
        42066770 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>Its good for bulking. eat 200-300g of it with other meals, and its cheap<BR/></FONT></TD></TR></TABLE>>]
        42067130 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>I live on my own how do i cook brown rice? I have a rice steamer is that all?<BR/></FONT></TD></TR></TABLE>>]
        42067138 -- 42064973
        42067138 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>&gt;ruled by communists  <BR/>&gt;won  <BR/>  <BR/>pick one<BR/></FONT></TD></TR></TABLE>>]
        42067157 -- 42064897
        42067157 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064897  <BR/>&gt;China finally has surplus food  <BR/>&gt;gets fat  <BR/>  <BR/>Fucking idiot.<BR/></FONT></TD></TR></TABLE>>]
        42067761 -- 42064973
        42067761 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>fuck off you fucking gook shit<BR/></FONT></TD></TR></TABLE>>]
        42067804 -- 42064783
        42067804 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064783  <BR/>kek<BR/></FONT></TD></TR></TABLE>>]
        42068425 -- 42067130
        42068425 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42067130  <BR/>Plz help i have no gf to cook for me<BR/></FONT></TD></TR></TABLE>>]
        42068465 -- 42064745
        42068465 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>It's one of those foods that has nothing wrong with it per se but when<BR/>compared to a close relative (brown rice) it is just not as nutritious. I've<BR/>taken to referring to such food as "cardboard food" to indicate it's deficient<BR/>nutritional content.<BR/></FONT></TD></TR></TABLE>>]
        42068528 -- 42064745
        42068528 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064745  <BR/>White rice is among the worst of the staples in the nutritional sense.  <BR/>If you eat rice at all, then it should be brown rice.  <BR/>Still, whole-wheat products, buckwheat or lentils (they are god tier, 26g<BR/>high-quality protein per 100g dry mass, second only to soy) are TONS better<BR/>and cost as much, or less, than brown rice.  <BR/>Nowadays, I don't eat rice at all, since it's so lackluster.<BR/></FONT></TD></TR></TABLE>>]
        42068616 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Brown rice tastes fucking disgusting, so I'll just stick to white rice.<BR/></FONT></TD></TR></TABLE>>]
        42068681 -- 42064973
        42068681 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064973  <BR/>  <BR/>Not this brainlet, mental-midget bullshit again...<BR/></FONT></TD></TR></TABLE>>]
        42068717 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;In these three prospective cohort studies of U.S. men and women, we found<BR/>that regular consumption of white rice was associated with higher risk of T2D,<BR/>whereas brown rice intake was associated with lower risk. In addition, our<BR/>data suggest that replacing white rice intake with the same amount of brown<BR/>rice or whole grains was associated with a lower risk. These associations were<BR/>independent of lifestyle and dietary risk factors for T2D, as well as<BR/>ethnicity.  <BR/>  <BR/>T2D=type 2 diabetes  <BR/>  <BR/>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3024208/<BR/></FONT></TD></TR></TABLE>>]
        42068787 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>Can someone tell me, as far as for bulking, how inferior is white rice?  <BR/>  <BR/>I ask because I have several bags of it I kind of want to get through before I<BR/>switch, but if it just sucks for bulking and cutting in comparison, I might<BR/>just give it away.<BR/></FONT></TD></TR></TABLE>>]
        42068858 -- 42064774
        42068858 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42064774  <BR/>&gt;chinese been eating rice for fucking forever  <BR/>&gt;diabetes has been a very rare is china  <BR/>&gt;suddenly, average person is more richer in china  <BR/>&gt;starts eating more meat and driving cars etc...  <BR/>&gt;suddenly, diabetes is a bug thing in china  <BR/>  <BR/>Gee, makes you think.<BR/></FONT></TD></TR></TABLE>>]
        42068887 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>There's literally nothing wrong with rice. Brown or white. Eat it with some<BR/>good ass sauces or stew and it's becomes so damn good. Season with some salt<BR/>and pepper. Good shit. Crack an egg into it. Good shit.  <BR/>  <BR/>Never with soy sauce. Don't be that disgusting rice and soy sauce poor person.<BR/></FONT></TD></TR></TABLE>>]
        42069057 -- 42065841
        42069057 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42065841  <BR/>rice reme<BR/></FONT></TD></TR></TABLE>>]
        42069247 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>for carbs, id rather eat sweet potatoes, whole wheatpasta, beans, etc. Theyre<BR/>just tastier and more filling.<BR/></FONT></TD></TR></TABLE>>]
        42069370 -- 42066736
        42069370 [label=<<TABLE ALIGN="LEFT" BORDER="0"><TR><TD BALIGN="LEFT"><FONT>&gt;&gt;42066736  <BR/>  <BR/>That's a lot of information that YOU MADE UP.<BR/></FONT></TD></TR></TABLE>>]
    }
    `;

  graph.innerHTML = Viz(source, {
    format: 'svg',
    engine: 'fdp',
  });

  const eventsHandler = {
    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
    init(options) {
      const { instance } = options;
      let initialScale = 1;
      let pannedX = 0;
      let pannedY = 0;
      // Init Hammer
      // Listen only for pointer and touch events
      this.hammer = Hammer(options.svgElement, {
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      });
      // Enable pinch
      this.hammer.get('pinch').set({ enable: true });
      // Handle double tap
      this.hammer.on('doubletap', () => {
        instance.zoomIn();
      });
      // Handle pan
      this.hammer.on('panstart panmove', (ev) => {
        // On pan start reset panned variables
        if (ev.type === 'panstart') {
          pannedX = 0;
          pannedY = 0;
        }
        // Pan only the difference
        instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
        pannedX = ev.deltaX;
        pannedY = ev.deltaY;
      });
      // Handle pinch
      this.hammer.on('pinchstart pinchmove', (ev) => {

        // On pinch start remember initial zoom
        if (ev.type === 'pinchstart') {
          initialScale = instance.getZoom();
          instance.zoomAtPoint(initialScale * ev.scale, ev.center);
        }

        instance.zoomAtPoint(initialScale * ev.scale, ev.center);
      });
      // Prevent moving the page on some devices when panning over SVG
      options.svgElement.addEventListener('touchmove', (e) => { e.preventDefault(); });
    },
    destroy() {
      this.hammer.destroy();
    },
  };

  const zoom = svgPanZoom('#graph > svg', {
    minZoom: 0.1,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true,
    customEventsHandler: eventsHandler,
  });

  sizes = zoom.getSizes();

  function updateMinimap() {
    const pan = zoom.getPan();
    const zoomRatio = zoom.getZoom();
    const aX = -pan.x / zoomRatio;
    const aY = -pan.y / zoomRatio;

    const xPercentage = aX / sizes.width;
    const yPercentage = aY / sizes.height;

    const minimap = document.getElementById('minimap-square');
    const minimapWidth = minimap.getAttribute('width');
    const minimapHeight = minimap.getAttribute('height');

    const rect = document.getElementById('minimap-rect');
    rect.setAttribute('width', (container.clientWidth / sizes.width) * (minimapWidth / zoom.getZoom()));
    rect.setAttribute('height', (container.clientHeight / sizes.height) * (minimapHeight / zoom.getZoom()));
    rect.setAttribute('x', xPercentage * minimapWidth);
    rect.setAttribute('y', yPercentage * minimapHeight);
  }
  zoom.setOnZoom(() => {
    updateMinimap();
  });

  zoom.setOnPan(() => {
    updateMinimap();
  });
});
