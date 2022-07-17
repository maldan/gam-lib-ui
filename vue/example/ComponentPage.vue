<template>
  <div style="overflow-y: auto; height: 100%">
    <Section title="Button">
      <Row size="1fr 1fr 1fr">
        <Button>Button</Button>
        <Button color="gray">Button</Button>
        <Button color="darkgray">Button</Button>
      </Row>
      <div style="margin-top: 10px">Simple button</div>
    </Section>
    <Section title="Input">
      <Input />
    </Section>
    <Section title="Textarea">
      <TextArea />
    </Section>
    <Section title="Select">
      <Select
        :list="[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ]"
        v-model="selectTest"
      />
    </Section>
    <Section title="Checkbox">
      <Checkbox v-model="checkboxTest" />
    </Section>
    <Section title="Toggle">
      <Toggle :list="['A', 'B', 'C']" v-model="toggleTest" />
    </Section>
    <Section title="Menu">
      <Menu
        :list="[
          { url: '/test', label: 'A' },
          { url: '/', label: 'B' },
        ]"
        v-model="toggleTest"
      />
    </Section>
    <Section title="Icon">
      <Row size="1fr 1fr 1fr 1fr 1fr">
        <IconPencil color="red" />
        <IconClose color="green" />
        <IconArrowRightSmall />
        <IconArrowLeftSmall />
        <IconScissors color="orange" />
      </Row>
    </Section>
    <Section title="Table">
      <Table
        :list="[
          { id: 1, title: 'sasageo', time: '22:32' },
          { id: 2, title: 'davageo', time: '22:32' },
          { id: 3, title: 'eblageo', time: '22:32' },
          { id: 4, title: 'urarageo', time: '22:32' },
        ]"
      />
    </Section>
  </div>
</template>

<script setup lang="ts">
import {
  Section,
  Button,
  Input,
  Menu,
  Checkbox,
  Row,
  Toggle,
  TextArea,
  Select,
  Table,
} from "../component/ui";
import {
  IconPencil,
  IconClose,
  IconArrowRightSmall,
  IconArrowLeftSmall,
  IconScissors,
} from "../component/icon";
import { ref } from "vue";

const checkboxTest = ref(false);
const toggleTest = ref("B");
const selectTest = ref("b");
</script>

<style module lang="scss"></style>
