import React from 'react'
import {Image,Center, Spacer,Container,Box,Text,Flex,HStack,VStack,UnorderedList,ListItem} from "@chakra-ui/react"
import { useState } from 'react'





const Menu = () => {
const [fix,setFix]=useState(false)

function setFixedSideBar(){
  if(window.scrollY >=1000){
    setFix(true)
  }else{
    setFix(false)
  }
}

window.addEventListener("sroll",setFixedSideBar)

  return (
    <div>
        <Container maxW="1240px" display={"flex"}> 
       <Box style={{position:"relative",zIndex:"1"}}>
       <Flex 
          pos="fixed"
          left="20"
          h="100vh"
          box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          w={"200px"}
          flexDirection="column"
          justifyContent="space-between"
          marginTop={"10vh"}
          marginBottom={"10vh"}
          >
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque mollitia, quaerat iure ducimus at culpa odit blanditiis eveniet, distinctio quia autem eligendi sed tempore eius? Nobis labore eveniet obcaecati!
             Nesciunt odit nihil maxime eveniet eum illo accusantium voluptatem ducimus neque deserunt cum culpa dignissimos eos perferendis blanditiis tenetur at, asperiores a, nulla ex repudiandae nobis. Rerum quia repellat quam.
             Repellat tempora inventore vel voluptate nobis consequuntur atque mollitia ab ipsum nam, aspernatur sunt adipisci voluptas ipsa temporibus recusandae. Sed eveniet dolor culpa labore. Veniam neque reiciendis eum cupiditate alias.
           
          </Flex>
       </Box>
          <Spacer/>
          <Flex  >
          <Container maxW={"800px"} h="100vh" scaleX={"overflow"} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi eveniet dolores harum. Minima quam, maiores labore itaque quaerat ducimus a facere ratione consequuntur corporis minus dolorem consequatur vero suscipit.
            Voluptatum reiciendis dolore neque molestias nostrum laborum nam ipsam fuga perferendis, dicta reprehenderit iusto repellat, cum asperiores ut pariatur. Accusantium dolorum repellat obcaecati harum dolor in voluptates quos odio doloribus?
            Voluptates mollitia fugit quos impedit illo dolore, hic ea eveniet quas eum eligendi? Sint numquam atque harum, quos tenetur, illo nobis eius perferendis alias ratione praesentium necessitatibus dolor saepe. Doloremque.
            Placeat alias aut sapiente assumenda! Consequatur, voluptate, debitis tempora harum ex, provident accusamus omnis doloremque eaque nisi qui soluta iure illum rerum non dolores accusantium neque libero vero commodi officia?
            Modi vitae est dicta adipisci impedit sequi quae minus amet nihil laboriosam incidunt culpa qui totam dolore at, soluta nam vel quibusdam officia quo sed, voluptatum quia! Corporis, pariatur eum.
            Possimus, tempora? Debitis nisi rerum hic commodi repellat libero sapiente accusantium autem. Asperiores amet rerum deleniti expedita vero. Architecto fugiat magnam voluptatibus hic minima? Minima vero porro consectetur esse cumque?
            Doloribus optio accusantium id eum neque quibusdam quod quas odio possimus unde, officiis amet, error fuga excepturi ex vel. Et quos officia ullam eveniet. Minima hic a nemo quas quibusdam.
            Culpa molestiae ratione deleniti ab dolorum tempora eos est similique repudiandae earum unde tempore quia laboriosam ipsam, laudantium nesciunt ipsum ut voluptatem ea labore eligendi et consequuntur rem? Eaque, facere.
            Beatae, minima velit. Autem, quas veniam. Eius id nulla doloremque voluptatum similique. Dolore commodi in non doloremque. Adipisci quos et dicta nam, obcaecati minus omnis quidem, sapiente doloremque ex voluptatibus!
            Impedit a eum recusandae veritatis maiores molestias, unde inventore consequatur doloribus reiciendis laudantium similique. Corporis, facilis repellendus maiores, modi maxime ratione dicta fuga, nostrum quae ipsa commodi illo quaerat libero?
            Consequuntur vitae reprehenderit libero doloribus beatae laborum commodi natus. Ipsa, aut. Repellat impedit earum sunt officia eos molestias sed asperiores, esse ab quos natus nemo rerum veniam maxime vitae hic.
            Facere minima illum optio corrupti est saepe ipsam iure cum numquam modi incidunt expedita quis unde autem pariatur, mollitia aliquid deleniti veritatis reprehenderit hic, dolorem in. Voluptate nostrum voluptatum inventore.
            Quaerat numquam assumenda unde tenetur officia excepturi quod nemo perferendis sapiente deleniti ipsa illum quae corporis, quam, adipisci libero. Aut, est. Dolores, sunt. Quia eaque sed numquam cum, amet voluptatum.
            Reprehenderit, alias. Quaerat illo consequuntur vitae ipsum at, eos corporis placeat nostrum illum rerum provident accusantium molestias alias earum tempore laborum. Consectetur placeat optio cumque eum corrupti ea tempora nobis.
            Sunt iure obcaecati, quos omnis fugit id quidem, recusandae commodi voluptas veniam eum maxime, aliquid aperiam voluptates. Sunt, iusto earum. Quis eum accusantium, consectetur quas dolore ratione alias explicabo pariatur?
            Quidem dicta enim voluptatum fuga veniam nihil veritatis mollitia nam, magni, a odio atque laborum iusto aperiam ad temporibus accusantium. Cumque placeat nemo reprehenderit magnam eligendi, eum corrupti beatae consequuntur!
            Error provident cumque tempora fuga vero accusamus sit est suscipit ad voluptates consequuntur, minus quasi doloribus repellendus id eius numquam, inventore saepe aperiam beatae quisquam eaque fugit nisi. Vitae, possimus.
            Numquam provident sequi ea cupiditate quasi nesciunt ex adipisci animi maiores officiis possimus sapiente, suscipit dolore at voluptatum ad. Adipisci veritatis deserunt pariatur suscipit placeat officia nulla, voluptas dolorem temporibus.
            Quas eum, quidem alias accusantium sint repellendus ratione in quia repudiandae, nobis labore dolore nam, magnam quod. Delectus sequi pariatur soluta autem libero reiciendis distinctio harum. Explicabo adipisci alias molestiae.
            Voluptate aut qui earum voluptatum necessitatibus atque harum, obcaecati aliquid repellat consectetur pariatur minima, deleniti quis similique totam? Quaerat, enim tenetur quia officia veniam possimus dolor necessitatibus impedit eum porro.
            Consequuntur explicabo, enim quos tempore at sapiente quo amet deserunt fuga cum itaque tempora natus! Accusantium impedit dignissimos similique nostrum, consequuntur nihil veritatis neque nesciunt fugit, mollitia ducimus atque explicabo!
            Sequi ipsam rem in nulla ex consequatur totam architecto enim fuga alias cupiditate vitae maxime nesciunt aperiam eligendi atque ea asperiores voluptates inventore, ab porro, omnis praesentium reprehenderit? Excepturi, quaerat.
            Fugiat modi quia perferendis. Sequi ipsa hic magni, nobis sunt officiis consectetur quam quidem nulla, enim amet facilis labore eum atque distinctio laborum molestias veritatis voluptatum voluptates porro perferendis deleniti.
            Asperiores exercitationem inventore adipisci, quae doloremque soluta aut. Fuga, eius molestiae nisi reprehenderit voluptatem voluptatum tempore ullam ex explicabo molestias tenetur. Consequuntur optio excepturi veniam praesentium consectetur amet hic eum.
            Reprehenderit quam nemo magni recusandae laborum harum accusantium odit ratione voluptatum pariatur quidem suscipit, commodi minima rem. Soluta, quas obcaecati explicabo optio nisi debitis ea, minus voluptate, eveniet ipsa alias!
            Dolorem iusto debitis deserunt nulla velit tempore, autem id dolorum? Voluptas quae perspiciatis ullam reiciendis blanditiis in, accusamus cupiditate dolorem ea dignissimos unde pariatur minima totam iure quia quo incidunt.
            Enim quos repellat libero! Sit itaque mollitia laboriosam sint facere vitae nesciunt cupiditate, reiciendis atque necessitatibus beatae quos, saepe illo odit omnis commodi, harum corporis. Reiciendis nisi aspernatur velit sit?
            Veniam alias eligendi, quia exercitationem velit consectetur excepturi vero dolorem unde nostrum illum ex placeat incidunt corporis eius corrupti nulla commodi repellendus labore iste sunt ullam maxime perferendis? Libero, sunt.
            Nobis dolorum aperiam porro dolorem natus, eum temporibus, asperiores, nesciunt reprehenderit nihil dolores voluptatum quae. Eum blanditiis vero tenetur, unde dolorem nihil debitis aperiam omnis aut sapiente eaque temporibus ab.
            Laborum vitae ullam, facere sed earum beatae eaque blanditiis vero magni, dolorem cupiditate deleniti dolore placeat. Nostrum error, tenetur, sit earum laudantium rem, iste voluptatem laborum aliquam commodi eligendi corporis?
            Et a id commodi nesciunt quos facere architecto facilis saepe ad soluta, numquam sit quod voluptate ut sed quaerat dolore nobis laboriosam rerum? Veniam possimus id iste ex aliquid. Totam.
            Praesentium vitae facere corrupti quisquam quod at impedit repellendus excepturi assumenda molestiae fugit veniam nihil mollitia placeat eaque, nostrum quia repellat corporis. Est, quasi enim ex facilis ipsum repellat ducimus.
            Provident facilis expedita recusandae officiis neque enim similique nobis itaque maiores quo repellendus pariatur excepturi voluptate omnis sequi harum fuga, et ipsam saepe sint dignissimos alias facere. Laborum, voluptates perspiciatis.
            Aliquam consectetur deserunt quae laudantium, voluptatibus ex nobis dolorum in sit, velit sunt dolore quo maxime quasi. Minus quidem iure quae voluptatum excepturi harum cum cupiditate recusandae dolorem, saepe molestiae.
            Dolorem omnis tenetur ratione hic possimus veniam fugiat quia pariatur voluptatum commodi dolores doloribus repellendus, assumenda minus placeat unde molestiae sed distinctio accusantium quo eum harum dolor. Esse, repellat officia!
            Impedit dolores eligendi dolor modi quia corrupti vel aliquid distinctio ipsum numquam est quisquam veritatis, fugit maiores asperiores molestiae dolore aperiam fuga non deleniti quidem inventore necessitatibus eius? Harum, asperiores.
            Magni quia maiores reprehenderit itaque facilis exercitationem dolorem odio fuga eos necessitatibus corporis unde ut nostrum eveniet voluptatem autem neque illum id dolore, vel, quam magnam facere? Excepturi, nobis suscipit?
            Laborum placeat magnam doloremque expedita provident possimus molestias enim nobis omnis voluptatibus labore minima, porro consequuntur praesentium veniam exercitationem perspiciatis quia obcaecati quo et error quam officia ipsa similique! Saepe.
            Magni libero officiis quod delectus error cumque atque recusandae ut. Accusantium commodi distinctio perspiciatis ea iusto rerum, ad quibusdam doloremque, porro cupiditate officia quis dolorum temporibus laborum nostrum provident aut?
            Ullam pariatur quos voluptatum voluptate maiores debitis quidem quas vero voluptatem accusamus repudiandae autem, odio illum! Laboriosam, temporibus laborum, quibusdam repudiandae eos itaque vel corporis ratione veniam nulla architecto iste.
            Veniam harum molestiae rerum enim nobis incidunt tempore in nostrum? Pariatur vitae alias maxime corrupti amet labore quis repudiandae molestias, culpa accusamus, nihil deleniti omnis similique ex ducimus voluptate quasi.
            Voluptatibus possimus in accusamus qui. Assumenda, nulla consectetur! Tempora aliquam qui corrupti voluptas, amet beatae explicabo eaque reiciendis autem ipsam dolorem. Molestias necessitatibus debitis harum voluptatum dolor mollitia expedita dolores!
            Est, ea itaque. Sapiente quisquam eum, explicabo ullam suscipit dignissimos ex consequuntur natus ipsam, sed obcaecati vel consectetur nemo provident dolor saepe corrupti ad nostrum ut sequi molestias. Exercitationem, eligendi.
            Dolor rerum cumque voluptatem nostrum pariatur nemo temporibus iste corrupti repellat nihil! Veritatis ab repellendus repudiandae necessitatibus nobis iure amet, maiores deserunt ullam optio, earum doloremque, harum ex omnis sapiente.
            Est quaerat iusto, ab adipisci ipsa officiis fugit quasi odio ratione, non voluptate ducimus velit perferendis, voluptas eius dolores ipsum. Sint doloribus ipsam eveniet! Nemo at soluta blanditiis adipisci porro.
            Amet illo sequi animi debitis nam repudiandae sapiente asperiores dignissimos vel voluptate aspernatur dolor nemo nisi fuga autem, natus dicta quisquam libero iure? Quos libero officiis maxime numquam, culpa nobis?
            Voluptatibus explicabo ullam reiciendis perferendis excepturi. Repellendus necessitatibus rem recusandae, praesentium dolores deserunt possimus. Nihil alias error vel, nulla quam impedit ipsam exercitationem autem deserunt dicta esse inventore quaerat laudantium?
            Autem in amet fugiat inventore, aliquid doloribus ipsa? Aliquid corrupti quaerat culpa explicabo, molestiae inventore! Voluptate laudantium velit odit consectetur tempora? Officia nam voluptatibus delectus maiores non porro. Ut, beatae?
            Adipisci impedit ut fugit, illo accusamus corporis odio non officia consequuntur quasi vel quas repellat deserunt quia eligendi aliquid inventore rem corrupti ad sequi aliquam vero. Dolores porro cupiditate corporis.
            Voluptatum, exercitationem magni quo mollitia enim sint aliquam similique dignissimos labore ab vel molestias non, eligendi eos aperiam! Beatae vero aliquid debitis recusandae ratione. Quis ut expedita tempora nemo sed.
            Qui nihil, error, dolores fugit deserunt, quia provident sint optio ipsum neque explicabo? Earum, sapiente recusandae aliquid enim hic, eius harum laudantium quos suscipit dignissimos reiciendis quisquam nesciunt possimus blanditiis!
            Fugiat, eius molestias beatae cupiditate repellat optio earum inventore officia? Dignissimos possimus enim unde ad dolores, repellat suscipit sequi quis reiciendis? Adipisci, accusantium quia ipsa repellendus repellat eaque tempore consequuntur?
            Expedita, facilis. Similique facere voluptatibus, veniam officiis consequatur eveniet ipsa quisquam? Omnis id mollitia sapiente quo, fugit quibusdam! Saepe, iure pariatur? Quidem sed, omnis dicta nobis sequi corporis impedit maiores!
            Tempore, ipsam. Nobis, cum sapiente? Molestias, eum velit ratione natus magnam tempora dolorum eveniet ea? Mollitia quos voluptates distinctio quas animi, et enim! Voluptates earum pariatur dolorum molestiae labore quod!
            Natus dolores sunt, nostrum aliquid atque dicta nisi fuga vel ullam quo eligendi laborum pariatur. Nesciunt facilis non architecto, in hic facere officia exercitationem laboriosam quas impedit inventore modi tempore?
            Inventore deleniti, autem explicabo saepe reiciendis exercitationem pariatur ipsa dolorum id commodi fugit ut doloremque, sequi eius fugiat odit, obcaecati quas! Architecto possimus voluptate, maxime eaque veniam quod repellat quo?
            Neque dicta, nulla qui saepe laboriosam tempore cupiditate explicabo earum quasi modi autem, eum soluta quo veniam dolor delectus ex alias! Non, harum nesciunt? Nihil nulla incidunt optio maxime nisi!
            Necessitatibus non similique vel incidunt quaerat quidem sapiente quis ad vitae odio neque, rerum totam cupiditate tempore accusamus corporis error maxime dicta obcaecati quasi. Harum aut doloremque repellat ex quod.
            Fugiat, recusandae doloremque maiores laboriosam sapiente quos iure quaerat pariatur sint nihil. Iste dicta molestiae nihil voluptates alias tempora ratione atque natus possimus id harum, labore praesentium modi, sequi laborum!
            Id ut quis incidunt culpa exercitationem sit odit! Accusantium suscipit quia iusto quo nulla. Excepturi, libero fuga doloribus fugiat velit eligendi. Eligendi labore fuga nam, corrupti tenetur quibusdam officiis voluptatibus?
            Expedita at in quod harum quas a obcaecati porro nobis natus dolorum possimus, libero eius! Sapiente reprehenderit optio soluta totam unde! Dolor unde quia in excepturi maxime laborum beatae blanditiis!
            Consequatur, tempora eaque sequi architecto minus est voluptatem eligendi amet exercitationem possimus, modi sit labore qui expedita id rem iure ipsa quasi. Dolores aliquam quos distinctio, maxime exercitationem expedita voluptatibus.
            Nihil maxime nesciunt eius sint a, iusto dicta molestias sapiente iure culpa quis fugiat impedit autem deleniti perspiciatis eum enim quisquam quod voluptatibus porro ea quasi ipsa illo. Inventore, ratione.
            Consequuntur molestias explicabo rerum maxime repellendus esse odio natus quaerat ut iste. Corrupti maiores beatae blanditiis unde ipsum, quae porro sed eos repudiandae quisquam expedita architecto vitae adipisci ea excepturi!
            Fuga, atque alias! Laudantium harum doloremque voluptatibus quam animi sed explicabo eveniet magnam laboriosam, eius blanditiis modi eum totam quae fugiat soluta in reprehenderit suscipit. At facilis corporis soluta deserunt.
            Rerum eveniet quisquam velit amet corporis doloribus! Ratione, consequatur modi illum similique, veniam necessitatibus odio et voluptates dolorum aperiam corrupti doloremque explicabo aspernatur id libero officia veritatis quae sequi eius.
            Praesentium magnam adipisci nulla non corrupti veritatis. Nisi eius, quod quasi culpa vitae exercitationem deleniti quaerat fugiat impedit perspiciatis ipsa corrupti alias iure quis vero unde sed incidunt rerum nulla.
            Quo dignissimos, pariatur obcaecati fugiat repudiandae numquam beatae, sint quas aperiam quaerat enim blanditiis a eius est dolorem nostrum? Voluptas adipisci maiores dolore enim eaque fugiat dolorum aperiam. Magnam, libero.
            Ipsa, iure commodi? Velit rerum quaerat libero nemo ea sunt aliquid voluptates minus corporis voluptatem incidunt sequi ut pariatur et, nihil quia maxime fugiat officia, porro eius. Esse, harum a.
            Ea aliquam rem eveniet dicta adipisci sint eligendi nulla minima optio tempora veritatis iure ex fuga neque sed similique officia qui aspernatur, commodi quas vero? Odio sit libero reprehenderit ipsa.
            Culpa minima iure illum nam hic nulla voluptas fugit qui, possimus nihil exercitationem quod quam molestias laudantium, in quibusdam dolore tempore delectus recusandae nesciunt praesentium. Animi ad possimus consequuntur quod!
            Sed officia molestias, fugiat odio cupiditate magni illo esse, quasi consequuntur obcaecati ullam doloremque quo alias laboriosam perferendis voluptate. Atque error nobis suscipit ducimus nesciunt harum quae ipsa alias voluptate?
            Ab iste officia non quia soluta, quibusdam, in ducimus exercitationem voluptas nostrum molestiae placeat quam consectetur architecto, repudiandae sint. Nobis voluptatum harum tempora delectus repudiandae impedit, suscipit ipsa cum quos?
            Aliquid corporis neque praesentium, impedit expedita ad architecto iure facilis quibusdam eos quidem? Inventore minus, quibusdam optio vero nulla nam dolor sit pariatur officiis fugiat reprehenderit aliquid ratione beatae corrupti!
            Dolorum labore quod, est neque quo doloremque modi explicabo iure ullam iusto cumque facilis officia deserunt, voluptatibus rem qui repellat consequuntur ex architecto. Minima, explicabo aliquid labore cupiditate nesciunt perspiciatis.
            Dolore blanditiis nobis esse, quisquam rem consectetur aperiam quis impedit reiciendis minus, adipisci delectus temporibus repudiandae eveniet doloribus nesciunt nulla error assumenda optio voluptatem sunt soluta perferendis saepe? Quia, repellat!
            Quis cupiditate recusandae alias, amet incidunt dolore blanditiis aut sequi maxime. Aut rerum reprehenderit commodi libero iste unde minus sed, consequuntur soluta qui ratione porro aperiam ipsam animi? Illum, deserunt!
            Cumque odit quibusdam, sint libero quas voluptatem! Soluta iure aut dicta! Ex placeat doloribus est minima maiores excepturi ab, velit, facilis delectus amet ullam perspiciatis magnam, minus consequatur nulla quidem.
            Provident, voluptatem. Corrupti harum placeat accusamus veniam asperiores rerum perspiciatis non ipsam eligendi tempore minima reiciendis architecto, eum nemo, commodi praesentium facilis voluptatum laborum quam aliquam veritatis reprehenderit ut natus.
            Quidem atque quos, fugiat nisi odit blanditiis ipsa iusto facere, autem nostrum repellat in. Maiores eum consequatur nemo? Debitis sapiente repellat assumenda adipisci voluptates ullam molestias quam? Error, voluptate earum?
            Architecto doloribus ipsum distinctio! Culpa esse ducimus doloremque dolor voluptate eum ipsum vero, doloribus reprehenderit consequatur, illo provident eveniet officia, dolorem quo harum rerum possimus nihil laudantium quam. Laborum, deserunt?
            Cupiditate officiis totam ut id voluptas modi ipsa, doloribus natus fugiat neque blanditiis labore facere, repudiandae repellat. Laborum deserunt aut placeat tempore cumque praesentium commodi totam illum voluptatum fuga? Quaerat.
            Iste vel amet fuga nihil cum aperiam? Rerum nemo quam placeat commodi! Voluptatum officia quos aspernatur repellendus nihil minus vitae consectetur saepe autem, qui non, optio doloremque, laudantium ut aut?
            Atque doloribus reprehenderit repellat vero impedit officia voluptate tempora accusantium placeat corporis eaque qui, officiis, doloremque alias cumque debitis maxime omnis porro dolores molestias deleniti laudantium. Amet deserunt nam hic?
            Similique maxime delectus sunt fugiat obcaecati fuga reiciendis nulla eius consequatur iste cumque libero modi vel perferendis dolore, architecto amet quae praesentium repudiandae quasi voluptate sit? Maiores totam iure quis?
            Rerum voluptatem dolor porro non, id, corrupti dolores eum velit nulla ab iste nisi eaque aliquid vitae debitis sit quidem nobis voluptates impedit necessitatibus labore sed totam rem consectetur! Veritatis?
            Sit non repellat similique dolores ratione inventore sequi optio rem magnam. Voluptas praesentium ab, asperiores perspiciatis dignissimos quisquam quo velit molestiae recusandae debitis temporibus doloribus et iusto? Reprehenderit, ex reiciendis.
            Minus, labore natus consectetur at architecto cupiditate debitis voluptatem quos reprehenderit perferendis maiores magnam provident assumenda perspiciatis magni velit, vel quibusdam, voluptatibus aspernatur nesciunt. Similique voluptate distinctio eveniet molestiae iure?
            Ut excepturi fugiat porro rerum deserunt eveniet adipisci maiores, fuga totam explicabo rem optio. Accusamus eos exercitationem cumque rerum provident vero perferendis, atque sit, ex ducimus, cum quod! Molestias, sit!
            Minima, similique quo incidunt deleniti asperiores cumque quibusdam dicta ex iusto blanditiis eos numquam libero modi id placeat earum, temporibus voluptates dignissimos eius voluptatum dolor nobis beatae veritatis? Sit, magnam.
            Consequuntur assumenda, accusamus fuga nesciunt hic possimus. Impedit quo ipsam dolore maiores nesciunt deserunt tenetur modi, eius, totam molestiae expedita repudiandae ipsa. Voluptatum corporis aliquam quis ipsam et dolorem deleniti.
            Placeat repellat atque illo quae perspiciatis at sit in unde. Doloribus earum et placeat reprehenderit recusandae non necessitatibus, quod officia quaerat, labore iure quibusdam! Doloribus nulla voluptatem exercitationem quos odit.
            Minus possimus dicta corrupti voluptatibus cupiditate quos libero laboriosam distinctio a, aut accusamus facere delectus recusandae in sapiente ab temporibus dolore nobis exercitationem magnam. Sit excepturi id quas provident temporibus!
            Recusandae rerum, sed veniam reiciendis officia deleniti voluptas! Sunt non itaque laborum cum, voluptate odit quibusdam officia fugiat aspernatur quae perferendis consequatur ipsa dolores? Sint rem repudiandae suscipit ad sit.
            Maiores aliquid porro voluptatem ipsa rerum libero, dolorem, adipisci quo nihil deserunt, eligendi fugit id illum quas! Id magnam, distinctio obcaecati hic ea accusamus sunt perferendis cupiditate quo asperiores nesciunt?
            Eos vitae iure similique sunt laudantium deleniti voluptate est nihil voluptas, accusantium neque a consequuntur quidem eaque eum, pariatur nobis corporis, reiciendis fuga sequi? Accusamus debitis atque tenetur numquam culpa?
            Hic, iusto. Animi illum amet modi? Natus ab totam dolor quisquam? Quo facilis, dignissimos accusantium, ex aliquid dicta dolores, quia asperiores necessitatibus corrupti natus quibusdam nam? Fugiat minima sit ex.
            A dolorem mollitia molestiae, nesciunt dolorum minus nobis corrupti ex consequuntur? Ab praesentium aliquam alias asperiores eum tenetur neque tempore minima, adipisci possimus atque suscipit, et, laboriosam at deserunt esse.
            Ut provident quas reiciendis praesentium aliquam neque earum minima enim adipisci, possimus itaque magni quam autem laboriosam ab tempore quo omnis ullam doloremque eaque obcaecati at! Eveniet quis aliquam ipsam.
            Consequuntur architecto, enim amet excepturi error iste unde incidunt maxime nam asperiores cupiditate dolor ut fugiat. Ipsum cum natus eaque molestias cumque alias, ad eum tempora repudiandae perspiciatis earum cupiditate?
          </Container>
          </Flex>
        </Container>



    </div>
  )
}

export default Menu