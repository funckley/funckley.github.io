import React, { useState, useEffect } from 'react';

// Custom hook for responsive design
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function TheoryPage() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  return (
    <div style={{ 
      paddingTop: 80, 
      color: 'var(--color-primary-text)',
      padding: isMobile ? '80px 1rem 2rem 1rem' : '80px 2rem 2rem 2rem',
      maxWidth: 1000,
      margin: '0 auto',
      lineHeight: 1.7
    }}>
      <h1 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        marginBottom: isMobile ? '1rem' : '1.5rem',
        borderBottom: '2px solid var(--color-accent)',
        paddingBottom: '0.5rem'
      }}>Theory & Writings</h1>
      
      <div style={{
        fontSize: isMobile ? '0.95rem' : '1rem',
        marginBottom: '2rem',
        fontStyle: 'italic',
        color: 'var(--color-secondary-text)'
      }}>
        The following sections are adapted from the theoretical chapter of my master's thesis, where I explored the ontological and epistemic distinctions between human and artificial creativity. While the ideas presented here are preliminary, they form the foundation for my ongoing work to develop a more rigorous, deductive framework for Human Creative Action—drawing from transcendental reasoning and a priori logic to formalize the epistemic boundaries of AI and computational models.
      </div>

      <article style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '1rem',
          color: 'var(--color-accent)'
        }}>What is Creative Agency?</h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          The question of whether artificial systems can be truly creative hinges not merely on the novelty or coherence of their output, but on the underlying structure of intention, judgment, and value alignment that informs the act of creation. While modern computational models are capable of generating music, text, and images that appear to be inventive—even surprising—such outputs do not, in themselves, constitute evidence of creative agency. To understand why, we must look beyond surface-level generativity and explore the deeper architecture of creativity from philosophical, biological, and computational perspectives.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          At the heart of this inquiry is the distinction between systems that are closed and those that are open-ended. AI systems, no matter how fluent or stylistically convincing, remain fundamentally closed. They are circumscribed by the data they are trained on, the static architecture of their networks, and the narrowly defined optimization goals that govern their behavior. Human creativity, by contrast, emerges from an open and evolving system shaped by evolutionary pressures, biological imperatives, emotional experience, and cultural context. It is this open-endedness—spanning countless layers of abstraction—that enables human beings to continually generate new goals, reframe existing problems, and cultivate unexpected forms of expression.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This difference is not one of scale or sophistication but of kind. Just as mathematics distinguishes between different orders of infinity, we might say that AI-driven generativity and human creativity occupy different orders of possibility. A model may convincingly simulate a composer's style or produce a clever image, but absent an internal structure for forming autonomous interests or reinterpreting goals, it cannot generate novelty in the deeper sense. It reacts, rather than originates. It recombines, rather than redefines.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Human creative agency is rooted in a complex interplay of interests that arise not merely from external stimuli but from a self-regulating and self-questioning cognitive architecture. These interests range from low-level biological drives—such as survival and social connection—to high-level abstractions such as beauty, truth, and transcendence. Crucially, these layers are not static. They feed into one another recursively, giving rise to a reflexivity that allows individuals to reshape their goals in response to experience, and to reinterpret past experiences through newly developed intentions. This reflexive loop, in which internal values evolve in dialogue with the world, forms the substrate of meaningful deviation—the ability to go beyond known patterns in ways that are not just statistically unlikely but aesthetically or philosophically purposeful.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          In this light, creativity involves more than the generation of difference. It involves the generation of tension—cognitive, emotional, or conceptual—and the ability to resolve that tension in a way that satisfies some set of internal criteria. We see this dynamic play out vividly in the domain of music, where composers construct arcs of harmonic, rhythmic, or timbral dissonance, only to resolve them with a sense of inevitability or surprise. Tension here is not a flaw but a feature, an engine of aesthetic propulsion. And yet, this engine depends on something AI systems currently lack: the experience of scarcity. Human beings operate within constraints—time, attention, cognitive resources, emotional tolerance—and it is precisely through these constraints that creative acts gain urgency and significance. An AI may mimic a dissonant phrase or generate a surprising image, but it does not feel the pressure of limited time, nor does it possess a stake in the resolution of its own gestures.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This absence of felt necessity—the absence of desire, of subjective investment—renders AI-generated creativity hollow in a phenomenological sense. Even if the arc of tension and release can be learned and reproduced statistically, its reproduction lacks grounding in any internal structure of value. The model has no reason to care, and therefore no reason to deviate from pattern in a way that is aligned with an evolving aesthetic sensibility.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Of course, creativity is rarely the product of pure top-down intent or pure bottom-up reaction. Rather, it emerges from a dialogue between abstract structures and embodied perception. Human creators often begin with a conceptual goal, a theoretical constraint, or a cultural frame, and allow their senses and intuitions to shape the unfolding of form. This interplay between top-down and bottom-up processes is not just a technical interaction—it is the heart of what makes creative thought flexible, surprising, and meaningful. A model trained purely bottom-up may capture stylistic nuance, but it cannot decide which constraints matter. A rule-based system may enforce structural logic, but it lacks the ability to evolve those rules based on shifting values. What is needed is not a linear combination of these modes, but a recursive integration—a creative system in which pattern recognition, value formation, and constraint negotiation co-arise.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          From this perspective, we can begin to define creative agency not as an output, but as a systemic property—an emergent quality that arises when a being operates across multiple layers of abstraction, modifies its own goals over time, and uses tension as a mechanism for exploration and expression. Such a system would not only generate surprising content but would also possess the capacity to reflect on its own generative process, to critique and revise itself, and to pursue deviation not as noise but as signal. This, perhaps, is the frontier for artificial creativity: not in the scaling of models, but in the reimagining of architectures that mirror the self-regulating, self-questioning, and value-laden nature of the human creative mind.
        </p>
      </article>

      <article style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '1rem',
          color: 'var(--color-accent)'
        }}>The Epistemic Boundaries of Models</h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          To engage seriously with questions of computational creativity, we must confront the epistemic limits of modeling itself. A model, no matter how complex or data-rich, is ultimately a selective abstraction: a simplification of reality constructed to serve a purpose. It foregrounds certain aspects of a phenomenon while omitting others, necessarily constrained by the assumptions, biases, and perspectives embedded in its design. As George Box famously observed, "All models are wrong, but some are useful." This observation is not merely pragmatic—it is deeply philosophical. It speaks to the fundamental asymmetry between the world and its representations, and it challenges us to interrogate what is gained and what is lost in any attempt to simulate, replicate, or generate phenomena as rich and multidimensional as music or creativity.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Contemporary machine learning models, particularly those based on neural networks, exemplify this epistemic constraint. Their strength lies in their ability to approximate complex, nonlinear functions through large-scale pattern recognition. But this strength also conceals a deeper limitation: the conflation of statistical correlation with conceptual understanding. A model may capture stylistic features, mimic local regularities, or extrapolate sequences that appear meaningful. Yet this apparent fluency is not rooted in any internal grasp of the structures it emulates. It does not know what it is doing. It has no awareness of the historical, cultural, or phenomenological dimensions that imbue music with meaning in human experience.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Models do not form hypotheses; they optimize. They do not inquire; they minimize loss. This distinction is subtle but critical. Human knowing is not reducible to pattern matching—it involves framing questions, constructing categories, navigating uncertainty, and shifting between multiple modes of abstraction. In music, this might take the form of improvising in response to an audience, composing a variation that subverts an expectation, or drawing a melodic idea from a personal or cultural memory. These acts are not merely statistical events; they are epistemic gestures. They reflect a relationship between the knower and the known, shaped by context, intention, and interpretation.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This is why modeling creativity is fundamentally different from modeling physical systems. In the latter, a model may approach predictive adequacy through increasingly refined equations or simulations. In the former, we are dealing with a domain in which the criteria of success are often ambiguous, contested, or internally contradictory. Creativity resists full formalization because it traffics in value, novelty, and surprise—none of which are easily reducible to input-output mappings. A creative model is not merely one that produces variation, but one that participates in a generative discourse, capable of modifying its own premises and engaging in acts of meaningful divergence.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          The epistemic gap is further widened by the recursive nature of human meaning-making. Humans interpret models, but they also reflect on those interpretations, question their tools, and sometimes reject them entirely. This metacognitive loop—thinking about thinking—is largely absent in current AI systems. A model does not critique itself, except through externally imposed optimization. It cannot revise its ontological categories or adopt new frames of reference unless reprogrammed to do so. It is trapped within the epistemic frame of its architecture and training data.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          What, then, are the consequences of deploying such models in creative domains? One consequence is the risk of mistaking fluency for understanding—assuming that a convincing output implies deep structural knowledge or intentionality. Another is the potential erosion of our standards for creativity itself, as we come to equate novelty with randomness, coherence with statistical regularity, and engagement with aesthetic surface. Perhaps most significantly, we may begin to design systems that perpetuate the very epistemic constraints we seek to transcend, mistaking acceleration for insight and generation for genesis.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          To address these risks, we must cultivate an epistemology of modeling that is both humble and critical. We must recognize that a model is not the world, nor is it the mind—it is a tool. And like any tool, it can illuminate certain patterns while obscuring others. The task, then, is not to eliminate modeling's limits, but to become more attuned to them: to trace the contours of what a model sees and what it necessarily misses. In doing so, we might begin to design hybrid systems that allow for reflexivity, ambiguity, and even failure—systems that mirror, however imperfectly, the epistemic richness of human creative agency.
        </p>
      </article>

      <article style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '1rem',
          color: 'var(--color-accent)'
        }}>Top-down vs. Bottom-up in Epistemology</h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          At the heart of any attempt to build generative models—whether in music, language, or economics—lies a deeper epistemological tension: can human creativity and decision-making be modeled from the bottom up, using empirical regularities, or must they be understood from the top down, through axiomatic reasoning and abstract principles? This divide is not merely technical; it reflects two fundamentally different ways of knowing, and thus of designing systems that aim to replicate or augment human cognition.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Bottom-up approaches, dominant in contemporary machine learning, operate on the premise that patterns can be learned directly from data. The architecture is indifferent to prior theory; it relies on statistical inference to surface structure from apparent chaos. While effective in domains governed by physical regularities—such as image classification or speech recognition—these methods falter when tasked with modeling inherently reflexive systems, such as human creativity or economic behavior. In both cases, the subject under observation is also the agent of change; the "data-generating process" is not fixed, but shaped by subjective intent, cultural context, and historical contingency.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          The failure to account for this distinction is nowhere more visible than in economics. Neoclassical, Keynesian, and monetarist frameworks alike often assume that human behavior can be modeled as if it were physical behavior—subject to continuous optimization, equilibrium-seeking, or stochastic fluctuation. These models presume stable utility functions, rational agents, or representative consumers, reducing the complexity of human action to mathematical tractability. In doing so, they fall prey to what Friedrich Hayek called the "pretense of knowledge"—the mistaken belief that techniques borrowed from physics can provide the same explanatory power in domains involving conscious choice.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          An alternative can be found in the Austrian School of Economics, particularly in the praxeological tradition articulated by Ludwig von Mises. Mises begins not with data, but with the axiom of purposeful action: the notion that human beings act intentionally to achieve desired ends. From this starting point, praxeology unfolds as a deductive science, grounded in what Immanuel Kant called synthetic a priori knowledge—truths that are both informative and necessary. Such a framework recognizes that models in human domains cannot be purely empirical; they must begin with assumptions about intention, value, and agency. This approach does not ignore the lower layers of abstraction—biological drives, social constraints—but rather integrates them within a coherent system that reflects the unique epistemic status of human actors.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This epistemological divergence is equally relevant in the design of creative AI. Generative models of music often rely on massive datasets of symbolic or audio representations, seeking to emulate human composition through learned associations. Yet this bottom-up strategy lacks what might be called epistemic intentionality—the capacity to select, judge, and deviate based on internalized goals. Creativity, like economic choice, is not merely the emergence of statistically rare patterns; it is the act of generating alternatives in alignment with a subjective, often evolving sense of value.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          To illustrate the consequences of neglecting this insight, consider Gödel's Incompleteness Theorems. Gödel proved that in any sufficiently expressive formal system, there will be true statements that cannot be proven within the system itself. This result, while mathematical, has profound philosophical implications: no formal structure can be both complete and consistent if it attempts to model itself or systems of its own complexity. The relevance for AI is clear. A model that seeks to capture the full range of human creativity—reflexivity, surprise, contradiction, moral ambiguity—will eventually encounter epistemic boundaries it cannot cross from within. It may simulate these properties, but it cannot generate them from first principles unless those principles themselves are recursively open-ended.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This points to a deeper limitation of bottom-up learning: it excels at interpolating within a given distribution but struggles to extrapolate meaningfully beyond it. It lacks the kind of abductive reasoning—the leap between domains—that defines much of human invention. By contrast, top-down models can guide generation not by mimicking past data but by enforcing structural or conceptual coherence from the outset. These constraints are not limitations but scaffolds: they channel variation toward goals, facilitate interpretation, and encode values that the system itself cannot learn from data alone.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This does not imply that we must choose between paradigms. Rather, the future lies in hybrid architectures that respect the epistemological integrity of both. Bottom-up systems bring fluency, richness, and adaptive generalization; top-down structures offer grounding, constraint, and human-aligned meaning. In creative AI, this means designing systems that are not merely expressive, but understandable—not only generative, but reflective. It requires an epistemology of humility: one that does not mistake mathematical power for insight, nor equate statistical novelty with genuine creativity.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          We must resist the urge to model creative systems as if they were closed physical processes. Human action—economic, aesthetic, or otherwise—is not a function of determinism but of choice under uncertainty. Any theory or model that aims to capture this must begin not with data, but with a philosophy of agency.
        </p>
      </article>

      <article style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '1rem',
          color: 'var(--color-accent)'
        }}>An Attempt at Collaborative Computational Emergence</h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          If the preceding discussions have made one thing clear, it is that artificial systems—even those capable of stylistically rich and statistically surprising outputs—do not constitute independent creative agents. Their generativity remains contingent on the boundaries of their training and the objectives defined by human designers. This contingency is not a flaw to be corrected, but a condition to be embraced. The future of computational creativity does not lie in autonomous machines replacing human expression, but in the design of systems that actively depend on human collaboration to achieve meaningful emergence.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Suppose we were to develop a perfect creative model—capable of collaborating fluidly with humans and producing art indistinguishable from that of a human artist. If such a model were isolated, generating output without human dialogue, feedback, or framing, it would eventually drift into self-referential incoherence. Lacking a lived context or evolving sense of value, it would cease to be truly creative and become a closed loop of stylistic recursion. Creativity, then, must be sustained by a human presence—not merely as a prompt or a critic, but as an existential anchor. A tool can simulate surprise; only a collaborative system can sustain surprise that matters.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          The ethical implications of this realization are significant. If human creativity remains a necessary ingredient, then the goal of computational tools should not be to replace human artists, but to amplify and extend what they can do. In the domain of music, this principle leads to a crucial distinction: tools should be judged not by how well they imitate what human musicians already do, but by what new affordances they introduce. For instance, a sample library that emulates a symphonic cello may be useful in sketching ideas—but its true creative value emerges only if it enables sonic textures, articulations, or compositional strategies that were previously inaccessible. AI-generated tools become artistically justifiable not because they replicate human labor, but because they offer expressive possibilities beyond it.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          This view aligns with a broader ethical stance: technology in the arts should enhance human expression, not replace it. It should augment human capacity without eclipsing it, and it should preserve the space for human struggle, error, and interpretive depth. If a performance can be rendered with greater nuance by a living musician, then that human touch ought to be preserved—not because humans are inherently superior in all respects, but because the act of performance is more than an output. It is a ritual of presence, vulnerability, and temporality that cannot be meaningfully simulated without distortion.
        </p>

        <p style={{ marginBottom: '1.5rem' }}>
          Thus, collaborative computational emergence must begin with humility: the admission that machines do not replace artists, but require them. It must proceed with purpose: the design of systems that do not seek efficiency at the cost of expressivity, or automation at the cost of engagement. And it must end with a redefinition of what constitutes creative success—not as fidelity to prior styles, but as the invention of forms and experiences that no human or machine could have realized alone.
        </p>
      </article>

      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: 'var(--color-card-bg)',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        fontStyle: 'italic',
        color: 'var(--color-secondary-text)'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          More theoretical writings and essays will be added to this section as they become available. This work represents an ongoing exploration of the philosophical foundations of creativity, technology, and human agency.
        </p>
      </div>
    </div>
  );
}
