const target_text = document.querySelector("#targettext")
const input_text = document.querySelector("#inputtext")

const target_pre = document.querySelector("#target_pre")
const input_pre = document.querySelector("#input_pre")

const writing_history = document.querySelector("#writing_history")
const writing_history_visible = document.querySelector("#writing_history_visible")

const compareColorButton = document.querySelector("#compare_color");

const colorRedButton = document.querySelector("#color_red");
const colorGreenButton = document.querySelector("#color_green");

const removeColorTagsButton = document.querySelector("#remove_color_tags");
const red_tag = "<font color='red'>"
const green_tag = "<font color='green'>"
const color_tage = "</font>"
const bold_tag = "<b>"
const bold_tage = "</b>"


n0 = ['6FWNIJ AK5LCM 12HWT4 V9S1D0 NOEZMJ', 'FPJL09 UAYD26 8LWYH0 RX1Y3A 3XPGHO', 'BH7AXO IVTGUC IBOQT1 9B4KTQ MSY7N9', '8ES83Z P6QP2G C5RRSE P7VSR7 MQJK73', 'YJUDC8 LXEZQW 94KI4B FL5HMW N503IA', 'V8DK1U X0VUZ2 FBG54O 6GNZT6 F2EDCR' ]
n1 = ['SD80NZ 21TQZS 3HNHIJ GC6AZT VODE15', 'YQD773 2J6VFW QCK1NA 8BUBBP 4FGH6T', 'K524R5 QRHJGD 47LVJI U2RP00 V0CMOJ', '48T3L8 IFULAP PMOFYL ZLNEKU 0IIMGP', '19RXW9 XX9Z7A 3HDCOK 8W5N99 KW6SV7', 'M5Y26M CTSXWS BGY1XU 4EEB3F AERYOQ' ]
n2 =['NIYSCG QYNZHK 4RHMRC 0R42TQ MF073B', '0876DL S7VJ99 SE58W6 FWD2N4 XYGRGF', 'JPMBAL FB6DPV 8C6U13 895POS TO63IU', 'XLIEWH VU739Q OAM4TT QIO5O2 UAW71A', 'W1BC53 5EPL91 AK8HQI PBZ0JK D2RE2Y', '04NKKF MSX1ZV YNLDXC JZUGXZ VGETHJ' ]
n3 =['3XSPKD P87JNP GGBBEI FARZ4T 3DA0VB', 'CNLSYR 03APJA 1O9YQ8 MTX050 O4ZUZH', '5W6GLB UC7QJC 17QVMC 0SFZW9 O87UD9', 'H6M5KZ LV1WED ERAHUW NEKPVW 4IJ435', '6KUQQE JLF1B2 R3GIS1 YT29IR XNH7FI', 'CXTYYN L2D86X 68HOMM 92TOFK G2SV54' ]
n4 =['IC4R3E 11X7AJ NSDV6X 9PYY0Z 0KOXCG', 'DFHY8C T4YXRM 8FJLB5 K7UGA2 NHCRZ4', 'O1J05H 73MVN2 BU5DRX 3CTTIQ 5OGELE', '9QKGM4 W0QAAB 17FJL9 3BSP8P SFODW6', 'W8QEUR BIUS5Z IPF34W 2S02VM 9EH6VQ', 'IY9MKN HZOT76 JZTGNL DVK2UA 6W81PL' ]
n5 =['0JH8MZ 7YLZ3V NSIVUU NGLM5R KG2GLO', 'R633CF AFBPPY P4QMXM IH48E7 97AO4E', 'ZUA5AU DCJ8D9 99QLD3 T2J158 SPKIVL', '1GTB6B FKVOXX JIU55B Y1ZOWC MQH2S6', 'EASIWW 8R30EF BEQV74 HFY1TT WCRHQ6', 'TXDYKP 2WX0RS 1N479O K0N06G 2ZDNCJ' ]
n6 =['9X965Y NF4SEI AWW41X DJ3LU7 BI80U9', 'A1CIYT Z7P00Z 3BKCSI W4MH7L J20QC6', 'E325VA GOFBMH K21ER1 8ZVTD9 UTVFNA', 'KRGHX7 RQVUSG YHZL5S 2IWOTY 2OPOG1', '3QLP3N HEF69U JMBQX5 P4J6AC J8XWZ0', 'KFPSEC O45YMR 68TDKR MBDVNL 8QND7G' ]
n7 =['ZNA540 LTC6YF XTWR7X 0K34R9 1GUESB', '2YQZFH 6HZ3E5 2AOLXK OPIRMC CSIDFM', 'LB7U8T GHEO70 Q8G27M ANB2OI J8RPC8', '3FE1OV NV5KJG QBZ9K5 HNLCYJ HI2XDD', 'J3PAQD P91ZU4 LEX3Y1 VJIQW4 VM9V8W', 'UUSSMY STDAWT 9R4W16 6507GK P0BF6N' ]
n8 =['IVLQFH YOHG4N 3GZQ9B 1COM4U ATCPM2', 'B3WHRI T48X8C RMAVBH A21A92 K9Q5JK', '006OQL QNFIDI SUF4WU 72E3ZI 6TC8GJ', 'EZ4X7Y EHP6YY WEP52M WTXVOU VX7PSS', 'RR7J6D AVL5RL 3U0OF1 K3SG9N 8KJFXJ', 'NSBN5M BZK517 DWZT6L G098DY EPD0C1' ]
n9 =['BAT51I J7Q8C6 UFSZ3K UA7WXZ H9O2X1', 'M5JQOE MYREDH XBRJH4 J7DBJ5 OL7163', 'WBM54P G34V8V NZCC7V 0L6KW3 LE4PIS', 'C9BOI0 FRSU2D DCMA5G FQ1I6E 6YH4YH', '92YUXK A8IDNU GRMZTL VV9FOP XRNTNN', 'WFQG9E 12TSKY 80PP80 WQKSZL 23AGT0' ]

s0 = ['PXIRRH AAFHLD DXYFFA BTLUWJ SSSRQL NHTZTD', 'WEESSQ OLOCMJ GMFVAL FPISSR NDXRHJ OVXTWB', 'FRPWFQ ACCXCM KMIGIU JRMJXN RYVHNI ZOKEVN', 'COUGWI XYCWCL UEQFF HUYNN GMATX', 'MBHVK PTSJW ROEEA AMDUG NYEPU', 'BEVXS PVVPB KNOGH ZTZDW GNKLV', 'KCRKY FQZLM GVQJU ZJMET ZOYXY', 'TCCUO BDPZZ BEYDQ WAKQH JDIUD', 'GITOB PBBAS HLQPI IWYZK LGJKQ']
s1 = ['XKGKEN OYEPKI CBQQZB MSKEJV ZSGKMA VHKZHM', 'BTANYE GHVPNI NVILGM BPTUZF QZDEKF WLEUOP', 'SCCZFR HSUXHS SCRKRT FJCIOV DLCFJG NNIQDP', 'BUFJDW IPKUXY WUQAA IMWCI XGYQA', 'JJWRF QRQKS WOWLN GRTOV DZLVN', 'DEVPY SGWXB BDXLZ DLIGM UTRMA', 'BLGOJ YSJCY OQHFF HWEYP HNHDA', 'MIBOP JTLUA ATTLM ZVRPO CCEXA', 'XDMVX SUBYZ THENX WUQOT JYFRR']
s2 = ['KYBPKL QPVOAF LOSFDD JAKGGZ CGFCEM SYJLWZ', 'QRYPDQ QGNPWI RDOUJH LVXFAI FNEMPY WZZQZD', 'VUENHA CDXWJL NOYWAA BSTIEH GFSHUZ YOCVXC', 'HEGNTG UKJTBG NSNDI OTKDB ZUUOT', 'ISSCT OLMKE QMSZA MKJJJ CCNPH', 'QFQCI ZPEXV FIXHZ FTGJO RMPNV', 'BLMRV QEYRT MHBRB ILJDW RXXYW', 'UGEBU HVAHA SMKQB IXFYK WRLVI', 'WWXDM TRPYO ASPTX KVUEB LRNCU']
s3 = ['EMTANZ ESOLPW CHFFHP BEEPYZ AYJCGV CPYHGH', 'WBPKME MKNOUG UCBYMQ UZLQVH RDQSPZ KEMWLH', 'YFCWGO ACVVQM WJALIG XNFSCZ TIHAGV LBKTRI', 'LOPULN OFNWFA QDQTY WKWPD LWLRR', 'EOJXN HROAJ ZOSKI SIMKG DCHIG', 'SCBIB UXTTQ ZBTJE JBFKP VCFHM', 'MRSTV FRJTB MURXK DZSBV NXWZX', 'OREKS IGIQD UXDNE ZQQXT URDAV', 'YASDU NXLJX DONVY PUGAF IYJYJ']
s4 = ['RTSWAS ITGQDY BXWDXW JDPZEC HTGRFL SXUWBS', 'JYBPIV JXNPUJ VJMXSM NMGKFT RLZHJN YVAFQU', 'EHQECF PWGIJC ROFMCW ZKGSYJ ZHNIBX UHCBKQ', 'HOVSGU QDIPWL BHMNW NCEVC YRNKZ', 'IETTU BLLCO QIHVV TAION OXPKE', 'OFAUD RFSFP SGOHE JHWLZ VKEZT', 'MOGYT GNDEM FICXG AQVUX YUZRK', 'PQYYL BUDAR MFZRK ALAIP ARJKD', 'QLLDK YOBVB SONEW DTMMZ PQACX']
s5 = ['VZBOIV HUUEQV UNSUAT KKLGBO VHGWMD DMAEFC', 'GLWHAH YQCOMW KRXOTE NRVUHD RUWNSJ DLWCCN', 'MKCZHH YJLLNP SZIOBD CCXQTV XYSGAX MAQEPM', 'RKLVYP FPJVQT RXJUM TPQDH RKGAI', 'SSCLA PXESD TFBYD QIIUT YDLPX', 'FFPIR BAFMK EFOJM ZBYZQ BNOXQ', 'WKVLS KSRTF PRBJX YTABJ MGTDG', 'ZJZCI UOEHO RJEBF YLNIZ UQONZ', 'PVHSW EGANF JGNWE IWKWY CIGXZ']
s6 = ['YZHXRH PZMZPD AGLHAO SBOIPV NCWCIF SQOUAG', 'MWOYEN WYGUJM OQRWVC SHTTQY BQHFBD HFFLRW', 'XUARLS VGCXEF RQVNQU YJPGIL KZTNPK PLMLVI', 'SPCDZF NPIKJR DBXFJ GJMXT OIKAO', 'SHZBS QWTVR ZEKBT EHIKX PYUFK', 'DQLCN YUTQE EHSJT RXVGN EISIO', 'CLOYD DAAUN BDKXM DVGLE PIKKA', 'FCVEZ OJXYR NMCUC MMWUH WESAB', 'ZZWBW AGQUG XRYJB LNVDJ FTTMJ']
s7 = ['LJMDHN DOYMID QNLKNW TFIXCS BBXZPH KLWVTU', 'KIJRCT PZRFEC ERPGPH VLHAJE RMVXUD NOAVHS', 'KZWYUS AWGJTS AFXUOW USBIKP QXTGIY XCUQBY', 'KICMUL VEGOUG EOUCD CAYSE QSPSD', 'QHKXC AAQMI DVOBH XTUZC ELLZF', 'AWWIR YYSPN WEVMR IZJRL YDFBZ', 'GTOES BJVQK GVTOB LHWHG FAJHZ', 'DXTGZ FPNDE VAWFK YQNQO BNTNQ', 'ZOLJY XRMIK CJPMF NMJPF RGBMR']
s8 = ['KSHSHP VTZBCT QAPEQU POOMZF YMNBYD SBYVSR', 'CCHDXX CLTMIF JBFHTQ JRNCFJ GLWKTT ZDPMJU', 'SFQEYR MEDEYR UPHWET FNZJAG VUWWDI TLVFGD', 'XSOYWK ALGLEN INRQM IHXVL AUHCA', 'XGPDM OIKZL KQRSB OKTML KJADP', 'IWGLB JWRRU BBBNQ XTGIN UPOYC', 'AYGIG XFQNU PWIOQ AZPKI UMZYC', 'GHAJW BDNRH AECZV XFHZU SJVQO', 'OXSCV ONEKD FRSJV WYXEK ZMVEL']
s9 = ['GXSFYX BFHMRO JPNVUX TBIXWN CRBLPT PVZNAI', 'MUQLWF VVIHUI FRQMWE QQCKER DGPPCV QSSOOA', 'QIVTJF DBJWDD XMESYZ UPOTYS RLLJAH ATSSNZ', 'CXGCPG UNFVNZ ANQEE KZETK JXNWY', 'FYEUG IPMNV KLDOO XLTAK JEEUD', 'HFWER CAILR HCTJF MAOZB AKMJD', 'IKVHR NJPGH HYGBW ZZOBB KDDPU', 'BQXQW MFRBG IDZCO UHWCY XTSTK', 'ISMUL JGQGS AVLMZ RWYKL YHYCO']
s10 = ['GNEXAK EGZWMO HSHXDQ HFDPWK JYNDNV WNQPRU', 'PDIWFK QZGPLL IQAYTA JOBSAZ VMUECV JXTWLX', 'RQLKRE YZNJVH XAMNBY NKBCFM UWQOPJ UVNIEF', 'FLBTCB MUODBW HYKJA SXUBO CIZHV', 'IGGKJ JTOTV MYXFZ VZNQA YGYAA', 'CQVTJ REFTJ TRGWI KSPRG BUZSA', 'SPSXM ZFGHK MBGIZ WTDEL CPBYF', 'IEDMC SOPUF IDXHP HENLS REROS', 'DLTQY XCRLW VULQD KURCO HICMO']
s11 = ['ZKEXBK GSDJXS MCTBZH LLCTTO ZGFKMK VGFOXI', 'JBBTHN EEWNSA RALLNU MAHUVU RDOQWQ HUHAHQ', 'PZQKUQ EDXUKU NJTFXO NLCQIM YJZJWY VPZRIF', 'EWVUMR STBXOB WETYI FGGNC BDSFC', 'DDUPE BKDJP CWQXA JSLFN LYWDK', 'CZFRY LZYCS PEDNB KYFNP WIAOE', 'ERCWR MVALT HOQGY HLXZV KMPPG', 'IISVH VGXRV MBSYW NJIOS FHVAR', 'PAMOP IICZG OQGXM DJTQU AJRTY']
s12 = ['SEKSLA PEBGCU ONXRDO TAIWWB SHVNWK VXIHMV', 'JUXZZR AHQJII CXFBTQ MUNGOA CPSCFP JUDNTM', 'DRKTLW LIHNWZ BMDYTY FGUZRM ESEFBY AKDJQC', 'HFZFJG RSVBOW MMZQF OKGPH QPSLP', 'RXXVL MYVGW XYAOI TTYWM EUPRD', 'BDUFI AJQYZ VTUPP JNKEL YXNCH', 'CCLLZ EWJRL NVLSO GQBBK PDCHA', 'GGQFU ZSHKK UBDKR RFYEO GOQNH', 'QMACE IXTXZ DTINV AIYOJ VEJSW']
s13 = ['DNZIRF RSTUVK CUUSCM PCBGLA HYJDET VRSBNO', 'UWTPZK ZCXCUR RKQSEF GTOQZL XJTPAR MNHWMB', 'PRONXY RTPYDI KPWGSC WMXHSK KJAIVB SQMWUV', 'GGKLEO ITZYSU GWIZB ZECTY FWVCD', 'HXFLE IUJNI AAOZH VLJYP YJMNJ', 'NJOQM EPXQY YWIYL VRICX ZMBXT', 'MKCQX HHNVL FBAFE GWAOW GUVJK', 'HOZHE OLSFT EPIDQ QGDLF JHQOF', 'BPDLX GVSFB NNUMB QDDEA AAKDR']
s14 = ['UWKPBO DBCKRM YHSDQU RHVTDY ZESNKQ YTOMCN', 'CGDZSR LPTDNZ ZQFBRG MXFBEZ MULAPL QZXVTC', 'YOVJPF EGUKSO PIAYGK YHAVDJ CELAQI PFPJXH', 'GIMEJA HYGQHQ JOFNI IQVAF SOATK', 'LZAUW DBPWN WTJMI BEFWE TOTHS', 'RRVGS BJCVX FBWBC UWHNM ZYNJP', 'HXEEP KCOAG XHKNW DUQOI ULCFR', 'SUVLR GBDKQ MXIVD SAXUN FXSME', 'ILIMT ZRYLJ WTOZC RVKLG JYWXN']
s15 = ['GACTCZ VFFWWQ RYPCNB EQPGCV MMDPMW NYEOZF', 'OECAKS HYEIFS BAQBSD IJWSEM XUBLWU JNVHNL', 'RJIPUM GIADIW RVBJRE GFDSQP XTDIGJ XLZQGX', 'FXVTHL TJBIQL JOMBX GKIVR FUOBC', 'OPHNM UYZDE BAYGM NWDKH SYBIK', 'KZFVO TZMJO ZPAHF DOWVL AHUKW', 'CCYKE HSSUR WLNGT IGQSU LAYTR', 'TJZRT ECPNK DTECV AZXXX RHKUX', 'RVQAH OPQUD YLYPQ NZFNM LJOKS']
s16 = ['XPOUMU QBARSC DWFZRQ LVIEKA YJKXZW FFHQYS', 'LPMRWG DEOLGO XSOTQA FBENZV ASUTHW JROWJV', 'XMQPON VDQVDN RSFIBL UXBMKA BWTGTD PPMLMU', 'BRNMEJ STCVEE FHWJI NZCRG ITTKX', 'EMJFG ZZYUY HRXAW EFHIK KAZQH', 'PGOGY SQOGP OTWXB SMYUJ UTQBN', 'NCGAK TKHHH FIFJO QKIYE DXPCS', 'LCIVY IDPGK BDNPV ECUHC VRDZL', 'CZAJL MYWJU ADSZR YLNBI CXVLN']
s17 = ['BTLQTK KVXEDW ZNLQLU ZJVDZF FYYMOR ZNYTDY', 'PALLAU NIATKP MEIRKA VCKKBX IRQPBA SEGYAH', 'VFTUBM ZCHUSS YQJTQQ FGDXJL KBUJAS CMZTAZ', 'WJSUXT CEFZEH NNSUM XVLVC EHAMM', 'CSJQC APYWW ZEFCN QIEID WHYHT', 'HNHNH EVNDB UJFHR SGOVG GPKIG', 'YBFWO OIDLB XORWL FGXGP XVPWD', 'LRMSC YRIBK ZQKOI XWOGM DGUBM', 'ERPJR JIUXF OVQPW JOCDS TPORN']
s18 = ['ZERWJI FHBOVV CUDVGW PDBCHL LZEELQ KMJNMY', 'AHKWJS AKNHRK ZYUSYX NMVKGP XYWTDX SWRCET', 'MQXYTF WIMGZG FGUUHN RQTCVW PNMNEP OXEQNI', 'OFUZJK MYFXRH OCODR JRQSZ BCUDL', 'ABOVT ADLYD ZJALW HJJPL CABLL', 'IOFIP VNIMJ FHIGN AUPBY JHWPR', 'BDWIY EBSCG LXZAU ESDAD GGTTI', 'PQQQV OGQAE YRXFP SXHTO MKSCF', 'VVNTK IMQZZ BKBSF ETSKR UCUXO']
s19 = ['WZILIQ RNHEVB CFUBPY VYIRBH IJDBPQ XMZLJP', 'YEBDSO JRVORB IPCXCT TWADYH WNXBUN SNXPPD', 'UMLQTL SLCTXY CGGHZC GYEKLN TFYWWV KRHPJN', 'ZSJCTW EUMUEB WUSKA AVDKN QIIZS', 'ZLDRO QQEEF ULRCR MKIDG OQFHZ', 'LTKDK GJCUJ VKFRB BNFJY POXNF', 'OMATH GGYEV GXWMV RQAZJ ASOCS', 'HFMJI LSWHK FHAMW ZOSPE XGZEN', 'XVTUV QOMUO MTDQX DIAAY PAFKG']

mail = ['THANKYOUFORATTENDINGTHECALLITWAS', 'REALLYNICETOLEARNABOUTYOU', 'ANDYOURBUSINESSIHAVEATTACHED', 'MYCUSTOMPLANFORYOURBUSINESSTO', 'THISEMAILPLEASEGOTHROUGHITAND', 'LETMEKNOWIFYOUHAVEANYCONCERNS']
p0 = ['M58NGMGYKZ83NCE2', 'A9ZUCPZKXB8KAM3L', 'QKPKMLZ9DU9AEZ94', '5VYM3T3D2B9F67BC', 'UEAU6RDARY7VDA4R', '6SCW7RW4V8GBHHBK', 'EA86BA5H7G8L3F5X', 'J3ZS26DXTCSGJZLX', 'QC8P3J2UJTZPWXKP', 'ZG9C6LQ8URFRSHKP', 'KNCZAMD2M6BMNAJN', 'X6HNLKF92VPUWMHW', '3FNNYKXWPM54697Z', '9TX8FZQHNS43AYHH', 'V5N8L2WKL4989E85', '7WGK7DABRLQLNS9T']
p1 = ['123456', 'ILOVEYOU', 'TINKERBELL', 'BABYGIRL9', 'CLASSOF2008', '070789', 'Q1W2E3R4T5', 'TRYAGAIN', 'SMELLY1', 'CAREBEARS1', 'I10VEY0U', 'PASS1WORD', 'PANICATTHEDISCO', '2CHILDREN', 'COUNTRYGIRL', 'HEARTAGRAM', '123QWEASD', 'BITEME2', 'DANIEL13', 'SOMETHING1']

const words_to_write = p1
var word_to_write_index = 0

var writing_history_text = ""

var keystroke_count = 0

var start_time = 0

function onLoad() {
    // set the first target string
    target_text.innerHTML = getTaggedTargetString()
    start_time = Date.now()
}

function endOfExperiment() {
    var time = (Date.now()-start_time)
    var end_of_exp = "END OF EXPERIMENT at " + time + " start_time:" + start_time + "<br>";
    writing_history_text += end_of_exp
    writing_history.innerText += end_of_exp;
    console.log("End of experiment")

    
    // change target text
    target_text.innerHTML = green_tag + bold_tag + "## END ##" + bold_tage + color_tage
    writing_history_visible.innerHTML = writing_history_text
    // downloadHistory()
}

function downloadHistory() {
    var textFile = null,
    makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/html'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };
  
    // var create = document.getElementById('create'),
    // textbox = document.getElementById('textbox');

    var link = document.createElement('a');

    var filename = "ExperimentRecord_" + Date.now() + ".html"
    link.setAttribute('download', filename);
    link.href = makeTextFile(writing_history.innerText);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });

}

// Event function -- called on every input char
function compareColor() {
    var stringMatch = colorComparedToTargetText()

    if(stringMatch) {
        var done = changeTargetText()

        removeInputText()

        if(done)
            endOfExperiment()
    }

    setTextCursorPosition()
}

// tag it etc. get 
function getTaggedTargetString() {
    if( word_to_write_index < words_to_write.length) {
        console.log("Next one: " + words_to_write[word_to_write_index] )
        return bold_tag + words_to_write[word_to_write_index] + bold_tage
    } else{
        console.log("getTaggedTargetString() index too large")
        return "Wrong index"
    }
}

function removeInputText() {
    input_text.innerHTML = ""
}

// returns false if there is no more target word
function changeTargetText() {
    word_to_write_index++

    if( word_to_write_index < words_to_write.length) {
        target_text.innerHTML = getTaggedTargetString()
        //var text_done = "END OF WORD at " + Date.now() + "<br>";
        //writing_history_text += text_done
        //writing_history.innerText += text_done;
        return false
    } else {

        return true
    }
}

function colorRed() {
    remove_color_tags()
    input_text.innerHTML = red_tag + input_text.innerHTML + color_tage
}

function colorGreen() {
    remove_color_tags()
    input_text.innerHTML = green_tag + input_text.innerHTML + color_tage    
}

function setInputText(txt) {
    input_text.innerHTML = txt
}

// returns true if two strings are the same
function colorComparedToTargetText() {
    remove_color_tags()
    
    targetString = new String(getRawText(target_text.textContent))
    targetStringLen = targetString.length

    inputString = new String(getRawText(input_text.textContent))
    inputStringLen = inputString.length
    
    target_pre.innerHTML = targetString
    input_pre.innerHTML = inputString

    minLen = Math.min(targetStringLen, inputStringLen)

    
    // Compute the number of common
    commonStringLen = 0
    var i;
    for(i = 0; i < minLen; i++) {
        if(targetString.charAt(i) == inputString.charAt(i)){
            commonStringLen++;

        } 
        // Check if spaces are matching (special handling needed due to nbsp and space)
        else if( (targetString.charCodeAt(i) == 160 || targetString.charCodeAt(i) == 32) && (inputString.charCodeAt(i) == 160 || inputString.charCodeAt(i) == 32)  ) {
            commonStringLen++;
        }
        else {
            break;
        }
    }

    coloredText = colorText(inputString, commonStringLen)
    setInputText(coloredText)

    return commonStringLen == targetString.length
}


function colorText(textToColor, commonStringLen) {
    prefix = textToColor.substring(0, commonStringLen)
    suffix = textToColor.substring(commonStringLen, textToColor.length)

    coloredText = green_tag + prefix + color_tage + red_tag + suffix + color_tage
    return coloredText
}

function getRawText(txt) {
    red_tag_re = new RegExp(red_tag, 'g');
    green_tag_re = new RegExp(green_tag, 'g');
    color_tage_re = new RegExp(color_tage, 'g');

    bold_tag_re = new RegExp(bold_tag, 'g');
    bold_tage_re = new RegExp(bold_tage, 'g');

    txt = txt.replace(red_tag_re, '');
    txt = txt.replace(red_tag_re, '');
    txt = txt.replace(red_tag_re, '');
    txt = txt.replace(green_tag_re, '');
    txt = txt.replace(green_tag_re, '');
    txt = txt.replace(green_tag_re, '');
    txt = txt.replace(color_tage_re, '');
    txt = txt.replace(color_tage_re, '');
    txt = txt.replace(color_tage_re, '');
    txt = txt.replace(bold_tag_re, '');
    txt = txt.replace(bold_tage_re, '');

    return txt
}

function getRawInputText() {
    return getRawText(input_text.innerHTML)
}

function remove_color_tags() {
    input_text.innerHTML = getRawInputText()
}

function input_text_change() {
    input_text.innerHTML = input_text.innerHTML + "0"
}

function setTextCursorPosition() {
    var editableDiv = document.getElementById("inputtext");
    cursorManager.setEndOfContenteditable(editableDiv);
}


//Namespace management idea from http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
(function( cursorManager ) {

    //From: http://www.w3.org/TR/html-markup/syntax.html#syntax-elements
    var voidNodeTags = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR', 'BASEFONT', 'BGSOUND', 'FRAME', 'ISINDEX'];

    //From: https://stackoverflow.com/questions/237104/array-containsobj-in-javascript
    Array.prototype.contains = function(obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }

    //Basic idea from: https://stackoverflow.com/questions/19790442/test-if-an-element-can-contain-text
    function canContainText(node) {
        if(node.nodeType == 1) { //is an element node
            return !voidNodeTags.contains(node.nodeName);
        } else { //is not an element node
            return false;
        }
    };

    function getLastChildElement(el){
        var lc = el.lastChild;
        while(lc && lc.nodeType != 1) {
            if(lc.previousSibling)
                lc = lc.previousSibling;
            else
                break;
        }
        return lc;
    }

    //Based on Nico Burns's answer
    cursorManager.setEndOfContenteditable = function(contentEditableElement)
    {

        while(getLastChildElement(contentEditableElement) &&
              canContainText(getLastChildElement(contentEditableElement))) {
            contentEditableElement = getLastChildElement(contentEditableElement);
        }

        var range,selection;
        if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
        {    
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
        }
        else if(document.selection)//IE 8 and lower
        { 
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }
    }

}( window.cursorManager = window.cursorManager || {}));


compareColorButton.addEventListener("click", compareColor)
colorRedButton.addEventListener("click", colorRed)
colorGreenButton.addEventListener("click", colorGreen)
removeColorTagsButton.addEventListener("click", remove_color_tags)
input_text.addEventListener("input", compareColor)


// Writing history
input_text.onkeydown = writing_history_handler;

let lastTime = Date.now();


function writing_history_handler(e) {

    var time = (Date.now()-start_time)

    keystroke_count += 1
    // let text = e.type +
    //   ' key=' + e.key +
    //   ' code=' + e.code +
    //   (e.shiftKey ? ' shiftKey' : '') +
    //   (e.ctrlKey ? ' ctrlKey' : '') +
    //   (e.altKey ? ' altKey' : '') +
    //   (e.metaKey ? ' metaKey' : '') +
    //   (e.repeat ? ' (repeat)' : '') +
    //   " time: " + time + 
    //   " key_count: " + keystroke_count.toString(10) +
    //   "<br>";
  
    /*
    
    {
        {"1": {"key": "A", "time": "328"}, "2": {"key": "B", "time": "450"}}

    */

    let text = '"' + keystroke_count.toString(10) + '": {"key":"' + e.key + '", "time": "' + time + '"}, <br>'

    //if (writing_history.innerText && Date.now() - lastTime > 250) {
    //  writing_history.innerText += new Array(81).join('-') + '\n';
    //}
    lastTime = Date.now();
  
    writing_history.innerText += text;
    writing_history_text += text
  
    
    //if (form.elements[e.type + 'Stop'].checked) {
    //  e.preventDefault();
    //}
  }

function writing_history_handler_detailed(e) {

  keystroke_count += 1

  let text = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    "<br>";

  //if (writing_history.innerText && Date.now() - lastTime > 250) {
  //  writing_history.innerText += new Array(81).join('-') + '\n';
  //}
  lastTime = Date.now();

  writing_history.innerText += text;
  writing_history_text += text

  
  //if (form.elements[e.type + 'Stop'].checked) {
  //  e.preventDefault();
  //}
}