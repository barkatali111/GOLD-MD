







const _0x881442=_0x5e6f;(function(_0x37dffb,_0x58daa9){const _0x216459=_0x5e6f,_0x2a33fb=_0x37dffb();while(!![]){try{const _0x284fa0=-parseInt(_0x216459(0x109))/0x1+-parseInt(_0x216459(0xf3))/0x2*(parseInt(_0x216459(0xfe))/0x3)+parseInt(_0x216459(0x10b))/0x4+-parseInt(_0x216459(0x100))/0x5+parseInt(_0x216459(0xf9))/0x6*(parseInt(_0x216459(0x102))/0x7)+-parseInt(_0x216459(0x106))/0x8*(-parseInt(_0x216459(0xf7))/0x9)+parseInt(_0x216459(0xfc))/0xa*(parseInt(_0x216459(0x105))/0xb);if(_0x284fa0===_0x58daa9)break;else _0x2a33fb['push'](_0x2a33fb['shift']());}catch(_0x489a4e){_0x2a33fb['push'](_0x2a33fb['shift']());}}}(_0x5978,0x8b1eb),require('dotenv')['config']());const {Pool}=require('pg'),s=require(_0x881442(0xf5));var dbUrl=s[_0x881442(0x101)]?s[_0x881442(0x101)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableAlive=async()=>{const _0x2c3674=_0x881442;try{await pool[_0x2c3674(0xf8)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20alive\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lien\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20'),console[_0x2c3674(0xf1)]('FIXING\x20ALL\x20COMMANDS\x20\x27IN\x27\x20GOLD-MD\x20BOT\x20CHECKING\x20ERRORS\x20AND\x20FIXING...');}catch(_0xeb510){console['error'](_0x2c3674(0xfd),_0xeb510);}};function _0x5e6f(_0x43013e,_0x4649b6){const _0x597844=_0x5978();return _0x5e6f=function(_0x5e6f5d,_0x3c78f2){_0x5e6f5d=_0x5e6f5d-0xf1;let _0x2a2792=_0x597844[_0x5e6f5d];return _0x2a2792;},_0x5e6f(_0x43013e,_0x4649b6);}creerTableAlive();async function addOrUpdateDataInAlive(_0x278253,_0xd4551f){const _0x8bc30b=_0x881442,_0x23c38e=await pool[_0x8bc30b(0x104)]();try{const _0x12db34=_0x8bc30b(0xff),_0x99b098=[_0x278253,_0xd4551f];await _0x23c38e['query'](_0x12db34,_0x99b098),console[_0x8bc30b(0xf1)]('FIXING\x20ALL\x20COMMANDS\x20IN\x20GOLD-MD\x20PLEASE\x20WAIT\x20A\x20SECOND\x20\x27NOW\x27\x20ADDED\x20SUCCESSFULLY');}catch(_0x31487e){console['error'](_0x8bc30b(0x10a),_0x31487e);}finally{_0x23c38e[_0x8bc30b(0xf2)]();}};async function getDataFromAlive(){const _0x54098c=_0x881442,_0x3680f1=await pool[_0x54098c(0x104)]();try{const _0x4ef67d=_0x54098c(0x103),_0x29bc69=await _0x3680f1[_0x54098c(0xf8)](_0x4ef67d);if(_0x29bc69[_0x54098c(0x108)][_0x54098c(0xfb)]>0x0){const {message:_0x4b9483,lien:_0x519a10}=_0x29bc69[_0x54098c(0x108)][0x0];return{'message':_0x4b9483,'lien':_0x519a10};}else return console[_0x54098c(0xf1)](_0x54098c(0x107)),null;}catch(_0x4828c7){return console[_0x54098c(0xf6)](_0x54098c(0xf4),_0x4828c7),null;}finally{_0x3680f1['release']();}}function _0x5978(){const _0x1b3361=['error','7070319Kxyyvk','query','1434uLnJTU','exports','length','16763990cYNWZr','ERROR\x20WHILE\x20ADDING\x20ALL\x20COMMANDS\x20IN\x20GOLD-MD\x20PLEASE\x20ASK\x20TO\x20UMAR\x20\x27OK\x27:','3RZgKbk','\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20alive\x20(id,\x20message,\x20lien)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20message\x20=\x20excluded.message,\x20lien\x20=\x20excluded.lien;\x0a\x20\x20\x20\x20\x20\x20','882925XstOJp','DATABASE_URL','3304RdpMYF','SELECT\x20message,\x20lien\x20FROM\x20alive\x20WHERE\x20id\x20=\x201','connect','11KHSCFN','8fleAPZ','Aucune\x20donnée\x20trouvée\x20dans\x20la\x20table\x20\x27alive\x27.','rows','992870TlpMlF','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27alive\x27:','202560zotJJX','log','release','1772296rAvDrA','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20depuis\x20la\x20table\x20\x27alive\x27:','../set'];_0x5978=function(){return _0x1b3361;};return _0x5978();};module[_0x881442(0xfa)]={'addOrUpdateDataInAlive':addOrUpdateDataInAlive,'getDataFromAlive':getDataFromAlive};
