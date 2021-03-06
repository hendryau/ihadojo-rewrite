import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Miyahira Katsuya'" [subTitle]="'1918-2010'">
      <div class="text-center">
        <img src="assets/biographies/miyahira/formal.jpg" class="mb-3 rounded">
      </div>
      <iha-section
        [title]="'Many Years Have Passed Since Starting to Learn the Way of Karate'"
        [hType]="'h2'"
        [subTitle]="'by Ernest Estrada'"
      >
        <p>In 1989, Master Katsuya Miyahira, the president of the Okinawa
        Shorinryu Shidokan, was honored by the Japan Martial Arts Association
        as a person who has contributed distinguished services to the martial
        arts. To commemorate this occasion, I would like to write about Master
        Miyahira's martial arts career from it's beginning. Master Miyahira was
        born in Nishihara, one of the villages directly controlled by the
        King's court, where martial arts had always been popular among the
        residents. He first learned martial arts from his father who had
        graduated from the Toyama Army School and was good at swordplay and
        gymnastics. Entering the First Junior High School, Master Miyahira
        began focussing on karate.</p>
        <p>He became a student at the dojo of Choshin Chibana Sensei, which
        was located at Nakijin Goten of Yoshitsugu Teishi; there he received
        influences from the dojo's senior pupils, such as Kangi Shoya,
        Yasuyoshi Kamikosu, Tsuguyoshi Miyagi, Chozo Nakama and Shinji Tawada.
        I have heard that Master Miyahira also learned karate at the First
        Junior High with Anbun Tokuda Sensei and his teacher who taught him the
        spirit of martial arts that has kindness among rigor. Both Chibana
        Sensei and Tokuda Sensei were among the best students of Anko Itosu
        Sensei, the master of the Shuri style (Shuri-te). This situation
        enabled Master Miyahira to learn the traditional katas of the Shuri-te
        both at the town dojo and at school.</p>
        <p>Traditional Shuri-te focuses on Atemi. The central idea is that
        blocking (uke) means not only to defend oneself against an attack by
        his opponent, but also to simultaneously crush the attack.
        Idealistically, one should train the hands and feet so as to achieve
        the condition in which strength and flexibility coexist, just as steel
        has both hardness and springiness in it. Thus, using a punching board
        (makiwara), one should hit it more than two hundred times a day with
        each hand, mixing several kinds of punching (tsuki) methods, aiming at
        simultaneous occurrence of offense and defense.</p>
        <p>Master Miyahira trained himself, closely following the Shuri-te's
        traditional methods. In 1948, soon after the end of the World War II,
        he opened a karate dojo in his hometown of Nishihara, intending to
        train the youth to be strong persons who could live through any
        difficulties. Master Miyahira set his dojo's rules as follows:</p>
        <ul>
          <li>Try to perfect one's own personality</li>
          <li>Cultivate the spirit of making constant efforts</li>
          <li>Admonish one's own youthful ardor</li>
          <li>Value good manors</li>
        </ul>
        <p><img src="assets/biographies/miyahira/miyahira.jpg" class="float-left w-50 pr-3">
        Based on these rules, he created his basic concepts of karate:
        "Following the reason and the law" and "coexisting and co-flourishing".
        He named his dojo Shidokan, hoping to instruct the youth who aspired to
        learn the way of karate. After moving to Naha City in September, 1952,
        he continued his effort to popularize the Shuri-te, and also visited
        the Philippines to teach and propagate karate there. In June, 1974,
        Master Miyahira participated in the First Karate World Championship and
        received an award for his distinguished service in karate.</p>
        <p>During the same period, Master Miyahira took office as the
        president of the Okinawa Shorin Ryu Karate Association and strived to
        make the association grow. Invited by the Brazil Shorin Ryu Karate
        Association, the Argentina Shorin Ryu Karate Association, and the North
        America Shorin Ryu Shidokan, he energetically visited these places to
        teach and popularize karate overseas. In 1982, he became a councilor of
        the Japan Karate Federation and devoted his energies to help make
        Japanese karate grow. He also took part in the Japan-China
        International Martial Arts Tournament as the leader of the Japanese
        team, making an effort for the goodwill exchange. In the karate
        division at the 42nd National Athletic Meet in 1987, the Okinawa team
        led by Master Miyahira, finished first overall, the victory earning
        Master Miyahira a special award for his distinguished service by the
        Okinawa Amateur Sports Association. Then came this year's award for
        distinguished services in martial arts.</p>
        <p>For the past several decades, I have been inspired by Master
        Miyahira's persistent effort to attain the higher ground in karate and
        in karate only, wishing to some day surpass him. It seems, however,
        that every moment I feel as if I can catch up with him, he is already
        gone far ahead of me; it is like building a ladder to reach the sky. I
        wonder if Master Miyahira is teaching me, with his own way of life,
        that there is no end for the quest for perfect karate.</p>
        <p>As an elder in the world of karate, Mr. Miyahira is in charge of
        the Okinawa Karate Conference and still gives his students lessons as
        well. In several symposiums held by the Karate Shinbun newspaper and
        the Ryukyu Shinpo newspaper, and also in his lectures, Mr. Miyahira has
        openly stated his own ideas about the future of Okinawa karate. Since
        those ideas are very suggestive, we will quote one of them here:</p>
        <p>"During the World Uchinanchu Tournament, the Karate/Ancient Martial
        Arts Exchange Festival was a big success. This is a big step for a
        future full-scale world championship" (From the symposium "The Future
        Okinawa Karate", The Karate Shinbun: September, 1990 ).</p>
        <p>When the karate lecture series for the general public took place
        for the first time (February~October, 1991), Master Katsuya Miyahira
        (President of the Okinawa Shorin Ryu Karate Association) taught the
        Shorin Ryu to about seventy people in one of the medium sized
        conference rooms of the Ryukyu Shinpo. Despite such a difficult theme
        as the lecture about karate, the seemingly small conference room was
        filled with eager karate fans and athletes. Master Miyahira explained
        to his audience the history of the Shorin Ryu and its characteristics
        by speaking about Choshin Chibana, his own master. The main difference
        between Mr. Miyahira's lecture and others' was that he mentioned
        Choshin Chibana's family tree in great detail. Choshin Chibana came
        from Suridennai and belonged to the high-rank warrior class. Out of his
        family line appeared many talented men who later became leaders of the
        society in different fields. One reason why Mr. Miyahira talked about
        the details of Chibana's life is to let his audience clearly understand
        the Shorin Ryu; another reason is probably based on his own unique
        philosophy for karate.</p>
        <p>Mr. Miyahira often teaches the "virtue of martial arts" to young
        people. At the end of his lecture, he explained the value of karate,
        quoting the "Seven Virtues of Martial Arts" from one of the Chinese
        military strategy books. The quotation reads as follows:</p>
        <p>"Martial arts forbids violence, suppresses an uprising, keeps one
        from corruption, establishes honor for one, pacifies the public, makes
        harmony among people, and makes one rich. These are the seven virtues
        of martial arts".</p>
        <p>The martial arts (karate) can, according to Mr. Miyahira, be a
        helpful tool for one's life: it adds value to one's ability, secures a
        sure means of living, and even makes one rich. This interpretation may
        sound vulgar, but it shows that Mr. Miyahira focuses not only on the
        spirituality of karate, but also on its practicality. Even today, many
        karate experts tend to hold on to the volunteer spirit as their mottos,
        believing that one should not use karate as a tool for making a
        fortune, or as a means of living. This kind of Puritanism has been
        preventing Okinawa karate from flourishing in popularity and achieving
        economical success in dojo management.</p>
        <p>The teaching of Itosu, however, does not insist on such
        Puritanism in karate; it seems to say that the more respectable a
        karate expert is, the more successful he should be socially and
        economically. Here we can see the will of Master Miyahira who, by
        having learned from Master Itosu, now instructs his students in
        accordance with his ideas: "Following the reason and the law" and
        "coexisting and co-flourishing".</p>
        <p>Mr. Miyahira speaks about the Shorin Ryu as follows. In 1908, his
        teacher Anko Itosu submitted a petition to the prefectural officials of
        Okinawa to introduce karate into the regular public school curriculum.
        This petition of Itosu is called the "Ten Articles of Karate". Mr.
        Miyahira says that this is all one should know about the Shorin Ryu.
        Though it may be a little too long, we would like to present its
        contents here:</p>
        <p>In the introduction, Itosu tells the history of karate ( China
        Hand ). It begins with the following sentences: "Karate came from
        neither Confucianism nor Buddhism. It started as the Classic Shorin Ryu
        and the Shorei Ryu, both of which came from China. Since these two
        methods have their merits and demerits, it is important to preserve and
        inherit them as they are". The paragraph continues as Itosu describes
        the purposes and training methods of karate, insisting that it be taken
        into the school education.</p>
        <p>His first article says that though karate's aim is to strengthen
        one's body, the main reason for this is not to meet one's own needs,
        but to serve the society. Thus a karate athlete has to know that even
        if he were to be confronted with violence, he should never hurt his
        opponent.</p>
        <p>The second article tells that karate strengthens bones and
        muscles of the body, making it as strong as iron and stone, so as to
        use the hands and feet in place of a spear or a sword. Itosu claims
        that such achievement is possible if one begins training his body when
        he is still in elementary school. Itosu then says that it would help
        Japan to build the society of soldiers, the ideal of Itosu's time when
        the whole nation was working hard to enrich and strengthen the country.</p>
        <p>The third article explains that though one cannot be a karate
        expert in a short time, a mere one to two hours vigorous daily training
        would make one's physique incomparable to a normal person in three to
        four years. From that point on, many would continue pursuing the career
        of karate for life.</p>
        <p>The fourth article claims that since the hands and feet are the
        most essential weapons in karate, one should train his by punching a
        makiwara every day. The point is to punch it one to two hundred times a
        day.</p>
        <p>Itosu thus keeps explaining the essence of karate. His fifth
        article describes the correct positions; another points out the wrong
        training methods, warning, for example, that too much tension in
        muscles can harm the blood circulation. We can understand Mr.
        Miyahira's claim that this letter of Itosu alone works as the bible of
        the Shorin Ryu.</p>
        <iha-section [title]="'Shorinryu'" [hType]="'h3'">
          <p>Originally, there was no clear distinction among various schools
            of karate (ryu). The style developed and handed down from generation to
            generation in Shuri has been called the Shuri-te, the one in Naha the
            Naha-te, and the one in Tomari the Tomari-te. Shuri flourished as
            Okinawa's capital city for a long time. As the center of history,
            culture and politics, Shuri has produced many famous martial artists
            such as Kanga Sakugawa AKA Karate Sakugawa, Choken Makabe AKA Makabe
            Chansho, Sokon Matsumura AKA Warrior Matsumura, and Master Anko Itosu.
            Master Choshin Chibana learned one of the traditional ways of karate
            from Master Anko Itosu, who in turn had learned it from Master Sokon
            Matsumura. In 1933, Master Chibana named the said way of karate the
            Shorin Ryu in order to distinguish it from the Shuri-te's other ryus
            and thus became its founder.</p>
          <p>The characteristics of the Shorin Ryu are detailed in the "Ten
            Articles of Karate", the petition submitted in 1908 by Master Anko
            Itosu, Master Choshin Chibana's teacher, to the education department of
            Okinawa Prefecture. The Shorin Ryu teaches stances and breathing
            methods that are natural and relaxed. It also teaches a unique method
            of taking in power and releasing it: one takes in power from inside
            outward. This method makes concentration of power easy, which, combined
            with the quickness of movement, increases the force of an attack. The
            basic training is the Naihanchi: one trains his hands mainly by
            punching a makiwara to increase the destroying force of an attack. Also
            when attacked, one should smash up the opponent as well as defend
            himself; this enables one to learn the technique of attack/defense
            combination.</p>
          <p>In Okinawa Prefecture, there are currently 24 dojos that belong
            to the Okinawa Shorin Ryu Karate Association, for which Mr. Miyahira
            acts as the president. More branch dojos exist outside of Okinawa and
            abroad, as the popularity of the Shorin Ryu is increasing worldwide.</p>
          <p>At the Bick Symposium Mr. Miyahira said: "It is important to
            develop the unique characteristics of each ryu of karate, but the most
            important thing today is to create an instruction plan that can be
            applied to any ryu. In order to achieve this, we have to educate our
            future instructors and found a karate university. It is possible to
            hold a world championship in three to five years. We should organize a
            task force to make the idea come true".</p>
        </iha-section>
        <iha-section [title]="'Career Outline'" [hType]="'h3'" [subTitle]="'by Morinobu Maeshiro'">
          <p>The following career outline was provided by Morinobu Maeshiro, Secretary-General of the
            Okinawa Shorinryu Karate Association, and a long-time friend and devoted
            student of Miyahira Sensei, to commemorate the occasion of Mr. Miyahira's receipt of the
            1989 Award For Distinguished Services from the Japan Martial Arts
            Council.</p>
          <h4>April 1933</h4>
          <p>Instructed by Choshin Chibana Sensei.</p>
          <h4>September, 1933</h4>
          <p>Instructed by Anbun Tokuda Sensei.</p>
          <h4>January, 1937</h4>
          <p>Instructed by Choki Motobu Sensei.</p>
          <h4>October, 1948</h4>
          <p>Opened a dojo at Kanehisa in Nishihara.</p>
          <h4>October, 1953</h4>
          <p>Becomes a karate teacher at the Ryukyu University.</p>
          <h4>April, 1958</h4>
          <p>Receives the title of Kyoshi from the Dainippon Butokukai.</p>
          <h4>February, 1967</h4>
          <p>Receives kudan as a karate Hanshi.</p>
          <h4>March, 1969</h4>
          <p>Takes office as the president of Okinawa Shorin Ryu Karate Association.</p>
          <h4>September, 1978</h4>
          <p>Receives judan as a karate Hanshi.</p>
          <h4>April, 1982</h4>
          <p>Becomes both a first rank judge for the qualification committee and a councilor.</p>
          <h4>April, 1986</h4>
          <p>Takes office as the president of the Okinawa Prefecture Karate Federation.</p>
          <h4>January, 1990</h4>
          <p>Receives the 1989 award for distinguished services in the martial arts from the Japan Martial Arts Conference.</p>
          <h4>April, 1990</h4>
          <p>Leaves office as the president of the Okinawa Prefecture Karate Federation; takes office as the advisor to said federation.</p>
        </iha-section>
        <iha-section [title]="'Miyahira Katsuya and Shorinryu'" [hType]="'h3'">
          <p>The following are the teachings of Miyahira Katsuya, the present <!--todo find out when he became not president-->
          president of the Okinawa Shorin-ryu Karate-do Association and one of
          the senior most students of Chibana Choshin. Miyahira teaches in Naha,
          Okinawa, and has contributed a number of outstanding students to the
          shorin-ryu system. Miyahira Sensei began training with Chibana Sensei
          in 1933 and was promoted to 9-Dan Hanshi in 1967. Upon the death of his
          teacher, he formally received the HANKO (official seals of the
          organization) and was voted president of the Okinawa Shorinryu Karatedo
          Kyokai in March of 1969.</p>
          <iha-section [title]="'Thoughts on Sparring'" [hType]="'h4'">
            <p><img src="assets/biographies/iha/iha-miyahira.png" class="w-50 float-right ml-3">
            I believe that free style sparring is essential to the advanced
            development of a student but only after the student's techniques are a
            part of their self. I must also state that the karate student's
            sparring techniques must come from the kata. This takes many years to
            develop and I do not allow a student to spar until they reach the
            sandan (third degree black belt) level. At this stage of their
            development, sparring can be helpful. Below the sandan level, free
            style sparring is too dangerous and will even hinder a student's
            development.</p>
            <p>I teach my students to be concerned with the mastery of the
            traditional kata and unless they master the kata they can never hope to
            become proficient in the study of karate-do. When a student reaches a
            point in their development where they have a good understanding of the
            kata, I then introduce the techniques of semi-free sparring. These are
            prearranged techniques that test the student's ability to judge
            distances and application of blocks and counterattacks. Later we
            introduce a limited type of free style sparring where we limit the
            areas to be attacked.</p>
          </iha-section>
          <iha-section [title]="'Thoughts on Correct Attitude'" [hType]="'h4'">
            <p>Some modern-day teachers are trying to develop the karate
            attitude through methods of tournament competition. The old way has
            always been self-competition and self-study. One might become a good
            fighter but we cannot say that they are practicing budo karate. This
            type of individual is much too limited. A student's training must
            always be in balance.</p>
          </iha-section>
          <iha-section [title]="'Thoughts on Kata'" [hType]="'h4'">
            <p>Kata is never concrete in performance or interpretation. It
            changes either knowingly, unknowingly or through the passage of time.
            Sometime the changes are small -- like changing the emphasis of
            punching to kicking or to quick movements or to slow, steady movements.
            An instructor may favor one technique over another and tell his
            students to emphasize it more than it was originally taught. The kata
            is still the same but a change has now taken place either consciously
            or unconsciously. These minor changes have not really changed the
            style. These changes cannot be prevented either, for in most cases the
            change occurs over a long period of time.</p>
          </iha-section>
          <iha-section [title]="'Thoughts on Styles of Karate'" [hType]="'h4'">
            <p>If you really look at the various names of the modern styles, it
            has no real meaning. Styles are based on the teachings of an
            individual. If the individual is good, then of course the style will be
            good. In the end, group styles are meaningless. You say that your style
            is better then this style or that style, let us see if you can prove
            it! A punch or kick can only be done in a limited number of ways that
            are combative. It is like a rifleman who shoots at a target. If he hits
            the target do you say that the rifle is a good shot or do you say that
            the man is a good shot? The rifle may be the most expensive and best
            rifle made but if the shooter is no good then the rifle will not hit
            the target. The rifle is the style and the shooter is the practitioner.</p>
            <p><img src="assets/biographies/miyahira/kagite.jpeg" class="w-25 mr-3 float-left">
            Miyahira Katsuya, Chibana Choshin's senior student, has no
            children. He has one brother who studied karate but he is a company
            president and has very little to do with karate. Miyahira still teaches
            Monday, Wednesday and Friday nights. He has always taught like that and
            has not changed his teaching times in over thirty years. On Okinawa,
            Miyahira is a recognized training partner of the great Motobu Choki.</p>
            <p>Miyahira Katsuya has a habit of punching the tatami when bored,
            tired or nervous. This habit goes back to his childhood. In the 1930's
            Chibana took Miyahira to visit Itosu's granddaughter that still lived
            in the Itosu family home. They sat and talked at great lengths about
            the great Itosu. Finally, they started talking about the difficult
            times at the time of Itosu's death in 1915.</p>
            <p>At this, Miyahira began to lose interest and unconsciously began
            to pound the tatami with his fist. The granddaughter immediately
            stopped her conversation with Chibana and looked at Miyahira. She then
            said, "That's a funny habit you have there. My grandfather use to do
            the same thing when he was bored!"</p>
          </iha-section>
          <iha-section [title]="'The Toe Kick'" [hType]="'h4'">
            <p>The two major styles of shorin-ryu (often referred to as Chibana
            style shorin-ryu and Matsubayashi-ryu) perform 85% of their front kicks
            (shomen geri) with what is called "tsumasaki geri" (toe-tipped kick).
            Of the kicks that are performed in basics and in kata, 85% are chudan
            shomen geri (middle area front kicks) and are done with the toe-tipped
            kick.</p>
            <p>The other 15% are called jodan shomen geri (high front kicks) and
            are performed with the ball of the foot. The toe-tipped is usually not
            performed or practiced in Japan due to the difficulty of the kick. The
            Japanese prefer the ball of the foot kick and the instep kick due to
            the fact that they feel it is easier to master. Nowadays, it is also
            rare to find an American Okinawan stylist who works on the toe-tipped
            kick. They, too, have sought to learn the easier way.</p>
            <p>Even today in Okinawa, the native practitioners still prefer the
            toe-tipped kick with the instep kick as a standby technique. Both of
            these kicks are diligently practiced on the makiwara and with training
            partners. The toe-tipped kick is performed straight in with the back
            and head straight. Tradition also indicates that when bringing the foot
            up for the kick, that it must be brought up to the opposite knee with
            the kicking foot pointed to a 90 degree angle forward (toward your
            opponent) before actually snapping the foot outward.</p>
          </iha-section>
          <iha-section [title]="'Shorinryu Maxims'" [hType]="'h4'">
            <p>These maxims are written on the wall of Miyahira Sensei's dojo in Kokuba, Naha.</p>
            <iha-section [title]="'Proper Spirit'" [hType]="'h5'">
              <ol>
                <li>You should thoroughly understand and pay strict attention to
                  your teacher's corrections and apply them correctly.</li>
                <li>You can attain perfection by exercising patience and through
                  constant training.</li>
                <li>In learning the basic techniques, learn to apply them, adopt
                  them and finally transform them to your own taste but always according
                  to the correct theory of basic techniques.</li>
                <li>You should listen to and accept the corrections of the more
                  senior or advanced students.</li>
                <li>Try to assimilate everything good in your peers and use it to
                  correct that which is inconsistent in you.</li>
                <li>When teaching you should always be kind but firm and strict
                  with your juniors.</li>
              </ol>
            </iha-section>
            <iha-section [title]="'Conduct'" [hType]="'h5'">
              <ol>
                <li>To acquire experience and understanding, take seriously all
                  advice given to you.</li>
                <li>Never judge or take a person lightly.</li>
                <li>Accept with an open mind the opinions and remarks of others,
                  if they prove to be earnest, just and correct.</li>
                <li>Be honest, fair and true whenever you ponder over or reason
                  out a problem or theory.</li>
                <li>When you are not training, quietly sit by the edge of the dojo
                  and watch the activities of your fellow students and how they are
                  corrected.</li>
              </ol>
            </iha-section>
          </iha-section>
        </iha-section>
      </iha-section>
    </iha-section>
    <!-- TODO GOJU GOURI KYOYEY KYOSAN -->
    <!-- On the origian of the name SHIDOKAN -->
    <!-- TODO photo of miyahira dojo -->
  `
})
export class MiyahiraPageComponent { }
