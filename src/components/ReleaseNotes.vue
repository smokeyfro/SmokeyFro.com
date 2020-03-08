<template>
<div class="absolute top-0 right-0 notes-wrap">
    <button>Release Notes</button>
    <div class="w-56 h-screen p-10 bg-white release-notes">
    <article v-for="note in $static.notes.edges" :key="note.node.id" class="flex items-start">
        <div>{{ note.node.date }}</div>
        <div>
            <h2 class="font-sans text-sm leading-tight">
                {{ note.node.title }}
            </h2>
            <p v-html="note.node.summary" />`
        </div> 
  </article>
</div>
</div>
</template>

<script>
export default {

}
</script>

<static-query>
query ReleaseNotes {
	notes: allReleaseNote {
		edges {
			node {
				title
				summary
				date(format: "D MMMM, YYYY")
				path
                id
			}
		}
	}
}
</static-query>