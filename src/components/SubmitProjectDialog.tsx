import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface SubmitProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubmitProjectDialog = ({ open, onOpenChange }: SubmitProjectDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("ideation");

  // Ideation Module
  const [oneLiner, setOneLiner] = useState("");
  const [ideaOrigin, setIdeaOrigin] = useState("");
  const [excitedNextModule, setExcitedNextModule] = useState("");

  // Research Module
  const [keyFindings, setKeyFindings] = useState("");
  const [researchSites, setResearchSites] = useState("");
  const [researchConfidence, setResearchConfidence] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [excitedMakingIdea, setExcitedMakingIdea] = useState("");

  // Activity 2: Shark or Shrimp
  const [understandingScale, setUnderstandingScale] = useState("");
  const [teamReactions, setTeamReactions] = useState("");
  const [changesAfterShrimp, setChangesAfterShrimp] = useState("");

  // Activity 3: Swap Teams
  const [swapExperience, setSwapExperience] = useState("");
  const [remarksGiven, setRemarksGiven] = useState("");
  const [remarksReceived, setRemarksReceived] = useState("");
  const [actionPlan, setActionPlan] = useState("");

  // Prototype Module
  const [platformUsed, setPlatformUsed] = useState("");
  const [productTone, setProductTone] = useState("");
  const [hostingPlatform, setHostingPlatform] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [productPhotos, setProductPhotos] = useState("");

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "Please log in to submit a project.",
        });
        return;
      }

      const photosArray = productPhotos
        .split(",")
        .map(url => url.trim())
        .filter(url => url.length > 0);

      const { error } = await supabase
        .from("project_submissions")
        .insert({
          user_id: user.id,
          one_liner: oneLiner,
          idea_origin: ideaOrigin,
          excited_for_next_module: excitedNextModule,
          key_findings: keyFindings,
          research_sites: researchSites,
          research_confidence: researchConfidence,
          target_audience: targetAudience,
          excited_for_making_idea_true: excitedMakingIdea,
          understanding_scale: understandingScale ? parseInt(understandingScale) : null,
          team_reactions: teamReactions,
          changes_after_shrimp: changesAfterShrimp,
          swap_experience: swapExperience,
          remarks_given: remarksGiven,
          remarks_received: remarksReceived,
          action_plan: actionPlan,
          platform_used: platformUsed,
          product_tone: productTone,
          hosting_platform: hostingPlatform,
          live_link: liveLink,
          product_photos: photosArray,
        });

      if (error) throw error;

      toast({
        title: "Project submitted!",
        description: "Your project has been successfully submitted.",
      });

      onOpenChange(false);
      resetForm();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setOneLiner("");
    setIdeaOrigin("");
    setExcitedNextModule("");
    setKeyFindings("");
    setResearchSites("");
    setResearchConfidence("");
    setTargetAudience("");
    setExcitedMakingIdea("");
    setUnderstandingScale("");
    setTeamReactions("");
    setChangesAfterShrimp("");
    setSwapExperience("");
    setRemarksGiven("");
    setRemarksReceived("");
    setActionPlan("");
    setPlatformUsed("");
    setProductTone("");
    setHostingPlatform("");
    setLiveLink("");
    setProductPhotos("");
    setCurrentTab("ideation");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black tracking-tight">
            SUBMIT YOUR PROJECT
          </DialogTitle>
        </DialogHeader>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="ideation">IDEATION</TabsTrigger>
            <TabsTrigger value="research">RESEARCH</TabsTrigger>
            <TabsTrigger value="shark">SHARK/SHRIMP</TabsTrigger>
            <TabsTrigger value="swap">SWAP TEAMS</TabsTrigger>
            <TabsTrigger value="prototype">PROTOTYPE</TabsTrigger>
          </TabsList>

          {/* Ideation Module */}
          <TabsContent value="ideation" className="space-y-4">
            <div className="space-y-2">
              <Label>What's your one liner?</Label>
              <Input
                value={oneLiner}
                onChange={(e) => setOneLiner(e.target.value)}
                placeholder="Describe your project in one line"
              />
            </div>

            <div className="space-y-2">
              <Label>How did you manage to think upon this idea?</Label>
              <Textarea
                value={ideaOrigin}
                onChange={(e) => setIdeaOrigin(e.target.value)}
                placeholder="Tell us about your ideation process"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Excited for next module?</Label>
              <Input
                value={excitedNextModule}
                onChange={(e) => setExcitedNextModule(e.target.value)}
                placeholder="Yes/No and why?"
              />
            </div>
          </TabsContent>

          {/* Research Module */}
          <TabsContent value="research" className="space-y-4">
            <div className="space-y-2">
              <Label>What were your key findings about your idea while researching?</Label>
              <Textarea
                value={keyFindings}
                onChange={(e) => setKeyFindings(e.target.value)}
                placeholder="Share your research findings"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Which sites you went while searching?</Label>
              <Textarea
                value={researchSites}
                onChange={(e) => setResearchSites(e.target.value)}
                placeholder="List the websites you used for research"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>How confident you are on your research?</Label>
              <Input
                value={researchConfidence}
                onChange={(e) => setResearchConfidence(e.target.value)}
                placeholder="1-10 scale or describe your confidence"
              />
            </div>

            <div className="space-y-2">
              <Label>Whom you found as your target audience?</Label>
              <Textarea
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Describe your target audience"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Excited for making your idea true?</Label>
              <Input
                value={excitedMakingIdea}
                onChange={(e) => setExcitedMakingIdea(e.target.value)}
                placeholder="Share your excitement level"
              />
            </div>
          </TabsContent>

          {/* Activity 2: Shark or Shrimp */}
          <TabsContent value="shark" className="space-y-4">
            <div className="space-y-2">
              <Label>On the scale of 1-10, how much do you think you were able to make the other teams understand your idea?</Label>
              <Input
                type="number"
                min="1"
                max="10"
                value={understandingScale}
                onChange={(e) => setUnderstandingScale(e.target.value)}
                placeholder="1-10"
              />
            </div>

            <div className="space-y-2">
              <Label>What were the reactions of the other teams about your idea?</Label>
              <Textarea
                value={teamReactions}
                onChange={(e) => setTeamReactions(e.target.value)}
                placeholder="Describe the reactions you received"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>What did you change in the product after receiving a shrimp (if received)?</Label>
              <Textarea
                value={changesAfterShrimp}
                onChange={(e) => setChangesAfterShrimp(e.target.value)}
                placeholder="Describe any changes made"
                rows={4}
              />
            </div>
          </TabsContent>

          {/* Activity 3: Swap Teams */}
          <TabsContent value="swap" className="space-y-4">
            <div className="space-y-2">
              <Label>Hey! How was your experience with this activity?</Label>
              <Textarea
                value={swapExperience}
                onChange={(e) => setSwapExperience(e.target.value)}
                placeholder="Share your experience"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>What remarks you gave to the team which you were swapped with?</Label>
              <Textarea
                value={remarksGiven}
                onChange={(e) => setRemarksGiven(e.target.value)}
                placeholder="Your feedback to other team"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>What remarks you got about your product?</Label>
              <Textarea
                value={remarksReceived}
                onChange={(e) => setRemarksReceived(e.target.value)}
                placeholder="Feedback received"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>What are you gonna do about the remarks you got?</Label>
              <Textarea
                value={actionPlan}
                onChange={(e) => setActionPlan(e.target.value)}
                placeholder="Your action plan"
                rows={4}
              />
            </div>
          </TabsContent>

          {/* Prototype Module */}
          <TabsContent value="prototype" className="space-y-4">
            <div className="space-y-2">
              <Label>Which platform are you using?</Label>
              <Input
                value={platformUsed}
                onChange={(e) => setPlatformUsed(e.target.value)}
                placeholder="e.g., React, Flutter, Web"
              />
            </div>

            <div className="space-y-2">
              <Label>What tone and personality you want your product to scream?</Label>
              <Textarea
                value={productTone}
                onChange={(e) => setProductTone(e.target.value)}
                placeholder="Describe the tone and personality"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Where are you hosting your platform?</Label>
              <Input
                value={hostingPlatform}
                onChange={(e) => setHostingPlatform(e.target.value)}
                placeholder="e.g., Vercel, Netlify, AWS"
              />
            </div>

            <div className="space-y-2">
              <Label>Live link of your product (optional)</Label>
              <Input
                type="url"
                value={liveLink}
                onChange={(e) => setLiveLink(e.target.value)}
                placeholder="https://yourproject.com"
              />
            </div>

            <div className="space-y-2">
              <Label>Photos of your product (comma-separated URLs)</Label>
              <Textarea
                value={productPhotos}
                onChange={(e) => setProductPhotos(e.target.value)}
                placeholder="https://image1.com, https://image2.com"
                rows={3}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            CANCEL
          </Button>
          <Button variant="hero" onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                SUBMITTING...
              </>
            ) : (
              "SUBMIT PROJECT"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitProjectDialog;
