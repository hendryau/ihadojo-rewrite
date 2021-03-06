import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iha-section [title]="'Matsumura Sokon'" [subTitle]="'1809-1899'">
      <p>"Bushi" Sokon Matsumura, close advisor to three Ryukyuan kings,
        provided many of the foundations for the karate-do studied today. He
        was noted for his study of the physical as well as metaphysical
        disciplines, and emphasized the importance of balancing physical
        development with moral education. He deeply embraced Confucianism and
        was also known for his mastery of the fine art of calligraphy. The
        following text was from a scroll written to his prominent student,
        Ryosei Kuwae, illustrating a basic aim of karate- that "spirit and
        technique are one."</p>
      <iha-section
        [title]="'Takenaga (Bucho) Matsumura'"
        [subTitle]="'To Kuwae, my fellow pupil on the thirteenth day of May (c. 1882)'"
        [hType]="'h2'"
      >
        <!-- TODO Get a photo of this from the dojo -->
        <p>Make a firm resolution to master the secrets of martial arts,
          otherwise go away. You must have the firm determination to accomplish
          the resolution.</p>
        <p>The sword and the pen are but one. Literature consists of poetry,
          exegetics, and Confucianism. A student of poetry works at words and
          produces sentences in order to seek fame, peerage and fief. A student
          of exegetics studies Chinese classics to instruct people. He may make a
          scholar but ignorant of the world. Poetry and exegetics only make
          people woo fame, thus they are not the true art. Confucianism, however,
          makes us understand the nature of things. By the teachings on
          knowledge, honesty, and righteousness one may not only be able to
          manage a household but govern a country. Thus peace will reign over the
          land. These are Confucian ideas, the true art.</p>
        <p>In the case of martial arts, there are three kinds of pursuers. A
          scholar pictures many ways of training in his mind so that his moves
          become like movements of dance; superficial and of no practical use for
          offense and defense. A normal student of martial arts is a good
          promiser of victory, but a bad performer. A dispute caused by such a
          man will harm people as well as himself. It will even bring disgrace
          upon his parents, brothers and sisters. The true pursuer of martial
          arts, however, does not idle away his time but accomplishes his talk
          ingeniously. He controls his mind and watches for a chance. His calm
          arouses a disturbance among enemies. He then grabs this chance and
          defeats the enemy. Everything ripens and the mystery of nature shows
          its secret to the master of martial arts, who has no hesitation or
          disturbance in his mind even in case of emergency. The power of a tiger
          and the swiftness of an eagle dwell within him. he defeats enemies
          completely and shows his loyalty and filial piety.</p>
        <p>There are seven virtues in martial arts: the prohibition of
          violence, the control of soldiers, the support for people's need, the
          establishment of distinguished services, the relief of the poor, the
          settlement of disputes among people and the enrichment of assets. As
          seen in his teachings, Confucius also praised these virtues. Thus the
          sword and the pen are but one, whereas the scholar's martial arts and
          the ostensible martial arts are useless. Therefore study the true
          literary and martial arts. Be sure to watch for a chance and then
          strike into the enemy. Keep the above words in mind and practice hard.
          I wish you understand my unreserved words."</p>
      </iha-section>
    </iha-section>
  `
})
export class MatsumuraPageComponent { }
