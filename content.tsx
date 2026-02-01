import { Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export function AppContent() {
  return (
    <>
      <KeyboardAwareScrollView bottomOffset={80}>
        <Text style={{ padding: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat
          dolores magni nulla iste itaque. Sint cupiditate rem facilis, eius
          quis eaque accusamus, perferendis, ea quod illum pariatur voluptate
          eveniet? Laudantium voluptates sequi quas quo corrupti, est illum iste
          incidunt inventore fugit assumenda ab deserunt cupiditate molestias
          itaque molestiae blanditiis. Distinctio, impedit enim! Repellat quae
          non eius ex, omnis dicta sunt aspernatur, porro consequatur adipisci
          magnam odio, voluptatum quasi beatae aliquid inventore dolores fugit
          accusantium quod maiores placeat quas quidem? Dignissimos quasi
          corporis totam accusantium amet numquam sunt ratione odio earum,
          asperiores nam assumenda voluptatem adipisci est alias quos atque
          deleniti. Amet at asperiores, omnis facere labore quaerat quidem
          laboriosam autem ut nesciunt doloremque hic obcaecati corrupti tenetur
          modi reiciendis? Sequi sapiente placeat ipsum qui amet distinctio
          expedita! Officiis soluta totam, id corrupti deserunt illum aliquam
          exercitationem quos adipisci unde quod non. Repudiandae inventore
          perferendis sit voluptates veniam vitae excepturi consequuntur,
          molestiae autem explicabo ipsa molestias reiciendis. Cumque vel
          aperiam voluptas dolores ex hic nobis praesentium libero illo alias ab
          nam, est officia quae optio placeat odit sed error quidem repellendus
          dolorum eaque, assumenda necessitatibus. Iure iste nam dignissimos
          facilis quidem ut? Repellendus commodi, minima dolore molestiae
          similique quaerat nisi sunt quibusdam velit suscipit facere nesciunt
          sapiente aperiam quae odit? Ullam earum quas nemo qui, molestias
          aperiam quaerat debitis. Dicta, adipisci odio saepe voluptates amet
          qui aliquid omnis pariatur debitis modi! Cum aspernatur ab consequatur
          molestias omnis culpa fugit odit ad laborum doloribus minima libero
          quia illum maxime voluptatibus, deserunt quaerat eius eveniet
          consectetur earum accusantium nemo illo consequuntur? Expedita, dolor
          ex quos quam autem laboriosam delectus officia perferendis. Aspernatur
        </Text>

        <TextInput
          placeholder="Enter text here"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
            paddingLeft: 10,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            margin: 20,
            alignItems: 'center',
          }}
          onPress={() => console.log('Button Pressed!')}
        >
          <Text style={{ color: 'white' }}>Press Me</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </>
  );
}
